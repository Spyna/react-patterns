import { observer } from "mobx-react-lite";
import { byCompleted } from "../../../utils/sortUtils";
import Todo from "../Todo/Todo";
import { useModel } from "../../../ioc/useModel";
import {
  TodoListPresenter,
  TodoListViewModel,
} from "../../../presenter/TodoListPresenter";
import Error from "../../Error/Error";
import Loading from "../../Loading/Loading";

export default observer(function TodoList() {
  const viewModel = useModel<TodoListViewModel>(TodoListPresenter);

  return (
    <main>
      <h2>Todo list</h2>
      {viewModel.todos
        .slice()
        .sort(byCompleted)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      {viewModel.error && <Error message={viewModel.error} />}
      {viewModel.loading && <Loading />}
    </main>
  );
});
