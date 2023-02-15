import "reflect-metadata";
import { Container } from "inversify";
import { TodoStoreImpl } from "../service/impl/TodoServiceImpl";
import { TodoStore } from "../service/TodoService";

const TYPES = {
  TodoStore: Symbol.for("TodoStore"),
};

const createContainer = (): Container => {
  const container = new Container({
    autoBindInjectable: true,
    defaultScope: "Singleton",
  });
  
  container
  .bind<TodoStore>(TYPES.TodoStore)
  .to(TodoStoreImpl)
  .inSingletonScope();
  
  
  return container;
};

export const container = createContainer();
export { TYPES };
