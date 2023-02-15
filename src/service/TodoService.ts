import { Todo } from "../domain/Todo";

export const TodoStoreType = Symbol.for("TodoStore");

export interface TodoStore {


  todos: Todo[];

  loadTodos(): Promise<void>;

  createTodo(text: string): Promise<void>;
}
