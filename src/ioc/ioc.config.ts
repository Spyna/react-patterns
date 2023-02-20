import "reflect-metadata";
import { Container } from "inversify";
import { TodoStore } from "../service/TodoService";
import { TodoStoreImpl } from "../service/impl/TodoServiceImpl";
import { TYPES } from "./ioc.types";
import { config, routingConfig } from "../config/app.config";
import {
  RouterType,
  RoutingConfig,
  RoutingService,
  RoutingServiceType,
  AuthenticationServiceType,
} from "../routing/RoutingService";
import { RouterServiceImpl } from "../routing/RouterServiceImpl";
import { AuthenticationService } from "../service/AuthenticationService";
import { AuthenticationServiceImpl } from "../service/impl/AuthenticationServiceImpl";

const createContainer = (): Container => {
  const container = new Container({
    autoBindInjectable: true,
    defaultScope: "Singleton",
  });

  container.bind<string>(TYPES.TodoBaseUrl).toConstantValue(config.todoBaseUrl);

  container.bind<RoutingConfig>(RouterType).toConstantValue(routingConfig);

  container
    .bind<RoutingService>(RoutingServiceType)
    .to(RouterServiceImpl)
    .inSingletonScope();

  container
    .bind<TodoStore>(TYPES.TodoStore)
    .to(TodoStoreImpl)
    .inSingletonScope();

  container
    .bind<AuthenticationService>(AuthenticationServiceType)
    .to(AuthenticationServiceImpl)
    .inSingletonScope();

  container
    .bind(TYPES.AuthenticationService)
    .toService(AuthenticationServiceType);

  return container;
};

export const container: Container = createContainer();
