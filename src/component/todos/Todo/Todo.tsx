import { Todo as TodoType } from "../../../domain/Todo";
import { useModel } from "terso";
import { TodoPresenter, TodoViewModel } from "../../../presenter/TodoPresenter";

interface TodoProps {
  todo: TodoType;
}

export default function Todo({ todo }: TodoProps) {
  const viewModel = useModel<TodoViewModel>(TodoPresenter);

  return (
    <li className="todo-card">
      <span className={todo.completed ? "done" : "todo"}>
        {todo.id} - {todo.title}
      </span>
      {viewModel.canDelete && <button>delete</button>}
    </li>
  );
}
