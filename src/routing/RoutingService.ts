export interface RoutingConfig {
  routes: RouteConfig[];
  notFoundComponent: React.FunctionComponent;
}

export interface RouteConfig {
  component: () => JSX.Element;
  path: string;
}

export const RouterType = Symbol.for("RouterType");
export const RoutingServiceType = Symbol.for("RoutingServiceType");

export interface RoutingService {
  notFoundComponent(): React.FunctionComponent;
  getRoutes(): RouteConfig[];
}
