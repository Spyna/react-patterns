import { inject, injectable } from "inversify";
import {
  RouterType,
  type RoutingConfig,
  RoutingService,
} from "./RoutingService";

@injectable()
export class RouterServiceImpl implements RoutingService {
  @inject<RoutingConfig>(RouterType)
  routingConfig!: RoutingConfig;

  notFoundComponent() {
    return this.routingConfig.notFoundComponent;
  }
  getRoutes() {
    return this.routingConfig.routes;
  }
}
