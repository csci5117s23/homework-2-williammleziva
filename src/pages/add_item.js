import { useState } from "react";
import { useRouter } from "next/router";

const AddTodoPage = () => {
  const [todo, setTodo] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/list?newTodo=${todo}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoPage;