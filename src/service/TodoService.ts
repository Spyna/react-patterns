import { Todo } from "../domain/Todo";

export interface TodoStore {
  todos: Todo[];

  loadTodos(): Promise<void>;

  createTodo(text: string): Promise<void>;
}
