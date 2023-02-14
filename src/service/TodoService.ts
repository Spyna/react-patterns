import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import { Todo } from "../domain/Todo";

export class TodoStore {
  todos: Todo[] = [];

  private baseUrl: string;

  constructor(baseUrl: string) {
    makeObservable<TodoStore, "todos">(this, {
      todos: observable,
      loadTodos: action,
    });
    this.baseUrl = baseUrl;
  }

  async loadTodos() {
    const response = await axios.get<Todo[]>(this.baseUrl, {
      params: {
        userId: 1,
      },
    });
    this.todos = response.data;
  }

  async createTodo(text: string) {
    const response = await axios.post<Todo>(this.baseUrl, {
      title: text,
      userId: 1,
    });
    runInAction(() => {
      this.todos.push(response.data);
    });
  }
}
export const todoStore = new TodoStore(
  "https://jsonplaceholder.typicode.com/todos"
);
