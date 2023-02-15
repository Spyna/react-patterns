import axios from "axios";
import { injectable } from "inversify";
import { action, makeObservable, observable, runInAction } from "mobx";
import { Todo } from "../../domain/Todo";
import { TodoStore } from "../TodoService";

@injectable()
export class TodoStoreImpl implements TodoStore {
  todos: Todo[] = [];

  private baseUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor() {
    makeObservable<TodoStoreImpl, "todos">(this, {
      todos: observable,
      loadTodos: action,
    });
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
// "https://jsonplaceholder.typicode.com/todos"
