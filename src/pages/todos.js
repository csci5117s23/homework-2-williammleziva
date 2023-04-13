import { useState, useEffect } from "react";
import { addTodo, getTodos } from "@/modules/Data";
import { useAuth } from '@clerk/nextjs';
import TodoListComponent from "@/components/list"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import NotSigned from "@/components/notsigned";
import TodoItem from "@/components/item";

export default function AddTodoPage(){
  const { isLoaded, userId, sessionId, getToken } = useAuth();

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
    
    event.target[0].value="";
    event.target[1].value="";
    event.target[2].value="";

    async function loadNewTodos() {
      let todosdict = await getTodos(authToken, userId);
      setTodos(todosdict);
    }
    loadNewTodos();
    }
  
  return (
    <div className="px-3">
      <SignedIn>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Add an Item to your To-Do List
          <FontAwesomeIcon className="ml-2 mt-4 absolute" size="xs" icon={faArrowTurnDown} style={{color: "#000000",}} />
        </h5>
        <form onSubmit={add} id="todoFields"> 
        {/* tailwind styling from https://flowbite.com/docs/forms/input-field/ */}
          <label for="item" className="block mb-2 text-sm font-medium text-gray-900">To Do List Item</label>
          <input type="text" id="item" className="border mb-1.5 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Grocery Shopping" required/>
          <label for="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
          <input type="text" id="category"  className="border mb-1.5 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Monday Errands" required/>
          <label for="contents" class="block mb-2 text-sm font-medium text-gray-900">Additional Content</label>
          <textarea id="contents" rows="2" class="border mb-1.5 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Make sure to bring grocery bags!"></textarea>
          <button type="submit" className="text-white my-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
        </form>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Your To-Do List
          <FontAwesomeIcon className="ml-2 mt-4 absolute" size="xs" icon={faArrowTurnDown} style={{color: "#000000",}} />
        </h5>
        <TodoListComponent title="Todo Items" data={todos}/>
      </SignedIn>
      <SignedOut>
        <NotSigned/>
      </SignedOut>
    </div>
  );
};
