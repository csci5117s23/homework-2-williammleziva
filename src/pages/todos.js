import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addTodo, getTodos } from "@/modules/Data";
import { useAuth } from '@clerk/nextjs';
import TodoListComponent from "@/components/list"

export default function AddTodoPage(){
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const router = useRouter();

  const [todos, setTodos] = useState([]);

  
  useEffect(()=>{
    async function loadTodos() {
        if(userId) {
            const token = await getToken({template: "codehooks"});
            let todosdict = await getTodos(token, userId);
            console.log (todosdict);
            setTodos(todosdict);
        }
    }
    loadTodos();
  }, [isLoaded]);


  const add = async (event) => {
    event.preventDefault();
    const authToken = await getToken({ template: "codehooks" });
    const data = {
        userId: userId,
        item: event.target[0].value,
        category: event.target[1].value,
        content: event.target[2].value,
    }
    //console.log (data);
    const newTodoresp = await addTodo(authToken, data);
    async function loadNewTodos() {
      const token = await getToken({template: "codehooks"});
      let todosdict = await getTodos(token, userId);
      setTodos(todosdict);
    }
    loadNewTodos();
    }
  
  return (
    <div>
      <form onSubmit={add} id="todoFields"> 
      {/* tailwind styling from https://flowbite.com/docs/forms/input-field/ */}
        <label for="item" className="block mb-2 text-sm font-medium text-gray-900">To Do List Item</label>
        <input type="text" id="item" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Grocery Shopping" required/>
        <label for="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
        <input type="text" id="category"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Monday Errands" required/>
        <label for="contents" class="block mb-2 text-sm font-medium text-gray-900">Additional Content</label>
        <textarea id="contents" rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Make sure to bring grocery bags!"></textarea>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
      <TodoListComponent title="Completed Items" data={todos}/>
    </div>
  );
};
