import axios from "axios";
import { inject, injectable } from "inversify";
import { action, makeObservable, observable, runInAction } from "mobx";
import { Todo } from "../../domain/Todo";
import { TYPES } from "../../ioc/ioc.types";
import { type AuthenticationService } from "../AuthenticationService";
import { TodoStore } from "../TodoService";

@injectable()
export class TodoStoreImpl implements TodoStore {
  todos: Todo[] = [];

  @inject(TYPES.AuthenticationService)
  private readonly authService!: AuthenticationService;

  @inject(TYPES.TodoBaseUrl)
  private baseUrl!: string;

  constructor() {
    makeObservable<TodoStore, "todos">(this, {
      todos: observable,
      loadTodos: action,
    });
  }

  async loadTodos() {
    const response = await axios.get<Todo[]>(this.baseUrl, {
      params: {
        userId: this.authService.getUser()?.id,
      },
    });
    runInAction(() => {
      this.todos = response.data;
    });
  }

  async createTodo(text: string) {
    const response = await axios.post<Todo>(this.baseUrl, {
      title: text,
      userId: this.authService.getUser()?.id,
    });
    runInAction(() => {
      this.todos.push(response.data);
    });
  }
}
