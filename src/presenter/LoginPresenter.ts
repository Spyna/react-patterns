import { inject, injectable } from "inversify";
import { action, makeObservable, observable, runInAction } from "mobx";
import { TYPES } from "../ioc/ioc.types";
import { type AuthenticationService } from "../service/AuthenticationService";

@injectable()
export class LoginPresenter {
  @inject<AuthenticationService>(TYPES.AuthenticationService)
  private readonly authService!: AuthenticationService;

  username: string = "";
  loading: boolean = false;
  error?: string;

  constructor() {
    makeObservable(this, {
      username: observable,
      loading: observable,
      error: observable,
      setUsername: action,
      authenticate: action,
    });
  }

  setUsername(username: string) {
    this.username = username;
  }

  async authenticate() {
    this.loading = true;
    try {
      await this.authService.authenticate(this.username);
      runInAction(() => (this.username = ""));
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => (this.error = (error as Error).message));
      } else {
        runInAction(() => (this.error = "unexpected error"));
      }
    } finally {
      runInAction(() => (this.loading = false));
    }
  }
}
