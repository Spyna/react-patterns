import { inject, injectable } from "inversify";
import { TYPES } from "../../ioc/ioc.types";
import { type AuthenticationService } from "../AuthenticationService";
import { AuthorizationService } from "../AuthorizationService";

@injectable()
export class AuthorizationServiceImpl implements AuthorizationService {
  @inject(TYPES.AuthenticationService)
  private readonly authenticationService!: AuthenticationService;

  hasPermission(permissionName: string): boolean {
    return Boolean(
      this.authenticationService.getUser()?.authorization[permissionName]
    );
  }

  getProfile() {
    return this.authenticationService.getUser()?.profile;
  }
}
