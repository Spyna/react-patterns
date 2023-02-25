import AboutPage from "../pages/AboutPage";
import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import { RoutingConfig } from "terso-routing";

export const config = {
  todoBaseUrl: "https://jsonplaceholder.typicode.com/todos",
};

export const routingConfig: RoutingConfig = {
  notFoundComponent: NotFoundPage,
  loginComponent: LoginPage,
  routes: [
    {
      component: IndexPage,
      path: "/",
      auth: true,
    },
    {
      component: AboutPage,
      path: "/about",
    },
  ],
};
