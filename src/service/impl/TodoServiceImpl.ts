import axios from "axios";
import { inject, injectable } from "inversify";
import { action, makeObservable, observable, runInAction } from "mobx";
import { Todo } from "../../domain/Todo";
import { TYPES } from "../../ioc/ioc.types";
import { TodoStore } from "../TodoService";

@injectable()
export class TodoStoreImpl implements TodoStore {
  todos: Todo[] = [];

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
        userId: 1,
      },
    });
    runInAction(() => {
      this.todos = response.data;
    });
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
