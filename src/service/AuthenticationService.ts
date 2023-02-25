import { User } from "../domain/User";
import { RouterAuthenticationService } from "terso-routing";

export interface AuthenticationService extends RouterAuthenticationService {
  isAuthenticated(): boolean;

  authenticate(username: string): Promise<void>;

  getUser(): User | undefined;

  logout(): Promise<void>;
}
