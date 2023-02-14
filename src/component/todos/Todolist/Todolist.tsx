import axios from "axios";
import { useEffect, useState } from "react";
import { Todo as TodoType } from "../../../domain/Todo";
import { byCompleted } from "../../../utils/sortUtils";
import Error from "../../Error/Error";
import Loading from "../../Loading/Loading";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  async function loadTodos() {
    try {
      const response = await axios.get<TodoType[]>(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            userId: 1,
          },
        }
      );
      setTodos(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError((error as Error).message);
      } 
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <main>
      <h2>Todo list</h2>
      {todos
        .slice()
        .sort(byCompleted)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      {loading && <Loading text="loading todos" />}
      {error && <Error message={error} />}
    </main>
  );
}
