import { inject, injectable } from "inversify";
import { action, makeObservable, observable, runInAction } from "mobx";
import { TYPES } from "../ioc/ioc.types";
import {
  Permissions,
  type AuthorizationService,
} from "../service/AuthorizationService";
import { type TodoStore } from "../service/TodoService";
import { Presenter } from "./Presenter";

export interface TodoViewModel {
  canDelete: boolean;
}

@injectable()
export class TodoPresenter implements Presenter {
  @inject(TYPES.TodoStore)
  private readonly todoService!: TodoStore;

  @inject(TYPES.AuthorizationServiceType)
  private readonly authService!: AuthorizationService;

  private canDelete: boolean = false;

  constructor() {
    makeObservable<TodoPresenter, "canDelete">(this, {
      canDelete: observable,
      loadViewModel: action,
    });
  }
  loadViewModel(): Promise<void> {
    this.canDelete = this.authService.hasPermission(Permissions.todo.delete);
    return Promise.resolve();
  }
  cleanModel(): Promise<void> {
    return Promise.resolve();
  }

  get viewModel(): TodoViewModel {
    return {
      canDelete: this.canDelete,
    };
  }
}
