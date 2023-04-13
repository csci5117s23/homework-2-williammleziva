import { useState, useEffect } from "react";
import { useAuth } from '@clerk/nextjs';
import TodoListComponent from "@/components/list"
import { useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import { getDoneTodos } from "@/modules/Data";
import NotSigned from "@/components/notsigned";

export default function Done(){

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    async function loadTodos() {
        if(userId) {
            const token = await getToken({template: "codehooks"});
            let todosdict = await getDoneTodos(token, userId);
            console.log (todosdict);
            setTodos(todosdict);
        }
    }
    loadTodos();
  }, [isLoaded]);


  return (
    <div className="px-2">
      <SignedIn>
        <div className="border-black text-black">
          <TodoListComponent title="Completed Items" data={todos}/>
        </div>
      </SignedIn>
      <SignedOut>
        <NotSigned/>
      </SignedOut>
    </div>
  );
};

