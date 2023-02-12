import { Todo as TodoType } from "../../../domain/Todo";

interface TodoProps {
  todo: TodoType;
}

export default function Todo({ todo }: TodoProps) {
  return (
    <li className="todo-card">
      <span className={todo.completed ? "done" : "todo"}>
        {todo.id} - {todo.title}
      </span>
    </li>
  );
}
