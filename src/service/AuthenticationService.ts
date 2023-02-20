import { User } from "../domain/User";
import { RouterAuthenticationService } from "../routing/RouterAuthenticationService";

export interface AuthenticationService extends RouterAuthenticationService {
  isAuthenticated(): boolean;

  authenticate(username: string): Promise<void>;

  getUser(): User | undefined;

  logout(): Promise<void>;
}
