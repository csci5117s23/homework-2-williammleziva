import { useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useAuth } from '@clerk/nextjs';
import { getTodo } from "@/modules/Data";
import { useRouter } from "next/router";
import Item from "@/components/item";
import NotSigned from "@/components/notsigned";

export default function SingleTodo(){
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const router = useRouter();
    const { todoId } = router.query;
    const [todo, setTodo] = useState([]);
    
    useEffect(()=>{
        async function loadTodo() {
            if(userId) {
                const token = await getToken({template: "codehooks"});
                console.log(todoId)
                let todoSingle = await getTodo(token, todoId);
                setTodo(todoSingle);
            }
        }
        loadTodo();
      }, [isLoaded]);
    
    return (
      <>
        <SignedIn>
          <div className="border-black text-black">
            <Item data={todo}/>
          </div>
        </SignedIn>
        <SignedOut>
          <NotSigned/>
        </SignedOut>
      </>
    );
  };