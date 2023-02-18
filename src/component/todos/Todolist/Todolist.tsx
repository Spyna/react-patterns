import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { TYPES } from "../../../ioc/ioc.types";
import { useInject } from "../../../ioc/useInject";
import { TodoStore } from "../../../service/TodoService";
import { byCompleted } from "../../../utils/sortUtils";
import Error from "../../Error/Error";
import Loading from "../../Loading/Loading";
import Todo from "../Todo/Todo";

export default observer(function TodoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const todoStore = useInject<TodoStore>(TYPES.TodoStore);

  useEffect(() => {
    async function loadTodos() {
      try {
        await todoStore.loadTodos();
      } catch (error) {
        if (error instanceof Error) {
          setError((error as Error).message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadTodos();
  }, [todoStore]);

  return (
    <main>
      <h2>Todo list</h2>
      {todoStore.todos
        .slice()
        .sort(byCompleted)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      {loading && <Loading text="loading todos" />}
      {error && <Error message={error} />}
    </main>
  );
});
