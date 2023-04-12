import { useRouter } from "next/router";
import Header from "../components/header";
import { useAuth } from '@clerk/nextjs';

const ViewTodoPage = () => {
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { newTodo } = router.query;

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
        <h1 className="text-black">My Todo List</h1>
        <ul>
          {newTodo && <li>{newTodo}</li>}
          {/* Add logic to display previously added todos */}
        </ul>
      </div>
    );
  }
};

export default ViewTodoPage;