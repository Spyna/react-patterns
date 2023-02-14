import { useState } from "react";
import { todoStore } from "../../../service/TodoService";
import Error from "../../Error/Error";

export default function AddTodo() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  async function addTodo(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    try {
      await todoStore.createTodo(text);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }

    setText("");
  }

  return (
    <section>
      <h2>Add todo</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          Add
        </button>
      </form>
      {error && <Error />}
    </section>
  );
}
