import { injectable } from "inversify";
import { action, makeObservable, observable, runInAction } from "mobx";
import { Profile, User } from "../../domain/User";
import { AuthenticationService } from "../AuthenticationService";

@injectable()
export class AuthenticationServiceImpl implements AuthenticationService {
  user: User | undefined;

  constructor() {
    makeObservable(this, {
      user: observable,
      authenticate: action,
      logout: action,
    });
  }

  isAuthenticated() {
    return Boolean(this.user);
  }

  async authenticate(username: string) {
    this.user = undefined;
    if (username === "Bret") {
      runInAction(() => {
        this.user = mockUser();
      });
    } else if (username === "Antonette") {
      runInAction(() => {
        this.user = mockAdmin();
      });
    } else {
      throw new AuthenticationException("invalid credentials");
    }
  }

  getUser(): User | undefined {
    return this.user;
  }

  async logout() {
    this.user = undefined;
    Promise.resolve();
  }
}

class AuthenticationException extends Error {}

function mockUser(): User {
  return {
    id: "1",
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "spyna.it",
    profile: Profile.User,
    authorization: {},
  };
}

function mockAdmin(): User {
  return {
    id: "2",
    name: "Antonette de Cognom",
    username: "Antonette",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "spyna.it",
    profile: Profile.Admin,
    authorization: {
      "todo.delete": true,
    },
  };
}
