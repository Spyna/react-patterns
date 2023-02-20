export interface RoutingConfig {
  routes: RouteConfig[];
  notFoundComponent: React.FunctionComponent;
  loginComponent: React.FunctionComponent;
}

export interface RouteConfig {
  component: () => JSX.Element;
  path: string;
  auth?: boolean;
}

export const RouterType = Symbol.for("RouterType");
export const RoutingServiceType = Symbol.for("RoutingServiceType");
export const AuthenticationServiceType = Symbol.for(
  "AuthenticationServiceType"
);

export interface RoutingService {
  notFoundComponent(): React.FunctionComponent;
  getRoutes(): RouteConfig[];
  loginComponent(): React.FunctionComponent;
  isAuthenticated(): boolean;
}
