import { useRouter } from "next/router";

const ViewTodoPage = () => {
  const router = useRouter();
  const { newTodo } = router.query;

  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {newTodo && <li>{newTodo}</li>}
        {/* Add logic to display previously added todos */}
      </ul>
    </div>
  );
};

export default ViewTodoPage;