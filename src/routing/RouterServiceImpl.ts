import { inject, injectable, optional } from "inversify";
import { type RouterAuthenticationService } from "./RouterAuthenticationService";
import {
  RouterType,
  type RoutingConfig,
  RoutingService,
  AuthenticationServiceType,
} from "./RoutingService";

@injectable()
export class RouterServiceImpl implements RoutingService {
  @inject<RoutingConfig>(RouterType)
  routingConfig!: RoutingConfig;

  @inject<RouterAuthenticationService>(AuthenticationServiceType)
  @optional()
  private authService!: RouterAuthenticationService;

  notFoundComponent() {
    return this.routingConfig.notFoundComponent;
  }
  getRoutes() {
    return this.routingConfig.routes;
  }

  loginComponent() {
    return this.routingConfig.loginComponent;
  }

  isAuthenticated() {
    if (!this.authService) {
      return false;
    }
    return this.authService.isAuthenticated();
  }
}
