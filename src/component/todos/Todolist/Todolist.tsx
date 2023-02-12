import { useState } from "react";
import { Todo as TodoType } from "../../../domain/Todo";
import { byCompleted } from "../../../utils/sortUtils";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <main>
      <h2>Todo list</h2>
      {todos
        .slice()
        .sort(byCompleted)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </main>
  );
}
