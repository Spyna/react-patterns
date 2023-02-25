import { inject, injectable } from "inversify";
import { action, makeObservable, observable, runInAction } from "mobx";
import { Todo } from "../domain/Todo";
import { TYPES } from "../ioc/ioc.types";
import { Presenter, ViewModel } from "terso";
import { type TodoStore } from "../service/TodoService";

export interface TodoListViewModel extends ViewModel {
  loading: boolean;
  error?: string;
  todos: Todo[];
}

@injectable()
export class TodoListPresenter implements Presenter {
  @inject(TYPES.TodoStore) private readonly todoService!: TodoStore;
  private loading: boolean = true;
  private todos: Todo[] = [];
  private error?: string;

  constructor() {
    makeObservable<TodoListPresenter, "loading" | "todos" | "error">(this, {
      loading: observable,
      todos: observable,
      error: observable,
      cleanModel: action,
    });
  }

  cleanModel() {
    this.loading = true;
    this.error = undefined;
    this.todos = [];
    return Promise.resolve();
  }

  loadViewModel() {
    this.todoService
      .loadTodos()
      .then(() => {
        runInAction(() => {
          this.todos = this.todoService.todos;
          this.loading = false;
        });
      })
      .catch((error) => {
        runInAction(() => {
          this.error = error?.message;
        });
      })
      .finally(() => {
        runInAction(() => {
          this.loading = false;
        });
      });
    return Promise.resolve();
  }

  get viewModel(): TodoListViewModel {
    return {
      loading: this.loading,
      todos: this.todos,
      error: this.error,
    };
  }
}
