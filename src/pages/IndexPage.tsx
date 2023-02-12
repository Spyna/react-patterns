import AddTodo from "../component/todos/AddTodo/AddTodo";
import TodoList from "../component/todos/Todolist/Todolist";

export default function IndexPage() {
  return (
    <main>
      <AddTodo />
      <TodoList />
    </main>
  );
}
