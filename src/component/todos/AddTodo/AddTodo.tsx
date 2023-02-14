import axios from "axios";
import { useState } from "react";
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
      const newTodo = await axios.post(
        "https://jsonplaceholder.typicode.com/todos/",
        {
          title: text,
          userId: 1,
        }
      );
      //TODO add the new created todo to the todo list
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
