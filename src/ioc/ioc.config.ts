import "reflect-metadata"
import { Container } from "inversify"
import { TodoStore } from "../service/TodoService"
import { TodoStoreImpl } from "../service/impl/TodoServiceImpl"
import { TYPES } from "./ioc.types"
import { config, routingConfig } from "../config/app.config"
import { AuthenticationServiceType, configureRouting } from "terso-routing"
import { AuthenticationService } from "../service/AuthenticationService"
import { AuthenticationServiceImpl } from "../service/impl/AuthenticationServiceImpl"
import { AuthorizationService } from "../service/AuthorizationService"
import { AuthorizationServiceImpl } from "../service/impl/AuthorizationServiceImpl"

export function configureContainer(container: Container) {
    container.bind<string>(TYPES.TodoBaseUrl).toConstantValue(config.todoBaseUrl)

    configureRouting(container, routingConfig)

    container.bind<TodoStore>(TYPES.TodoStore).to(TodoStoreImpl).inSingletonScope()

    container
        .bind<AuthenticationService>(AuthenticationServiceType)
        .to(AuthenticationServiceImpl)
        .inSingletonScope()

    container
        .bind<AuthorizationService>(TYPES.AuthorizationServiceType)
        .to(AuthorizationServiceImpl)
        .inSingletonScope()

    container.bind(TYPES.AuthenticationService).toService(AuthenticationServiceType)
}
