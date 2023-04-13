import { useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useAuth } from '@clerk/nextjs';
import { getTodo } from "@/modules/Data";
import { useRouter } from "next/router";
import Item from "@/components/item";

const practice = {"done":false,"created":"2023-04-13T00:16:51.063Z","content":"buy socks and shoes","category":"errands","item":"go to the store","userId":"user_2OIFxrlv3oKj6FIPoXnNOdx7obo","_id":"643749f3ffcc7cd5fbf24b8e"}

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
          <div>
            Sign in to view your todo item
          </div>
        </SignedOut>
      </>
    );
  };