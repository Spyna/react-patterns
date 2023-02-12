import { useState } from "react";

export default function AddTodo() {
  const [text, setText] = useState("");
  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  async function addTodo(event: React.FormEvent) {
    event.preventDefault();
    //TODO
    setText("");
  }

  return (
    <section>
      <h2>Add todo</h2>
      <form onSubmit={addTodo}>
        <input type="text" value={text} onChange={handleTextChange} />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
