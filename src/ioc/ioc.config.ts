import "reflect-metadata";
import { Container } from "inversify";
import { TodoStore } from "../service/TodoService";
import { TodoStoreImpl } from "../service/impl/TodoServiceImpl";
import { TYPES } from "./ioc.types";
import { config } from "../config/app.config";

const createContainer = (): Container => {
  const container = new Container({
    autoBindInjectable: true,
    defaultScope: "Singleton",
  });

  container.bind<string>(TYPES.TodoBaseUrl).toConstantValue(config.todoBaseUrl);

  container
    .bind<TodoStore>(TYPES.TodoStore)
    .to(TodoStoreImpl)
    .inSingletonScope();

  return container;
};

export const container: Container = createContainer();
