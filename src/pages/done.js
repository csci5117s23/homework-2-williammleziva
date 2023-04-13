import { useAuth } from '@clerk/nextjs';
import TodoListComponent from "@/components/list"

const practice = [
  {"done":false,"created":"2023-04-13T00:16:51.063Z","content":"buy socks and shoes","category":"errands","item":"go to the store","userId":"user_2OIFxrlv3oKj6FIPoXnNOdx7obo","_id":"643749f3ffcc7cd5fbf24b8e"},
 {"done":false,"created":"2023-04-13T00:16:37.754Z","content":"buy socks and shoes","category":"errands","item":"go to the store","userId":"user_2OIFxrlv3oKj6FIPoXnNOdx7obo","_id":"643749e5ffcc7cd5fbf24b8d"},
 {"done":false,"created":"2023-04-12T23:53:56.640Z","content":"this works","category":"hopefully","item":"test1","userId":"user_2OIFxrlv3oKj6FIPoXnNOdx7obo","_id":"64374494ffcc7cd5fbf24b8c"}
 ] 

export default function Done(){

  const { isLoaded, userId, sessionId, getToken } = useAuth();


  if (!userId){
    return (
      <div>
        Sign in to view your todo list
      </div>
    )
  }
  else{
    return (
      <div className="border-black text-black">
        <TodoListComponent title="Completed Items" data={practice}/>
      </div>
    );
  }
};

