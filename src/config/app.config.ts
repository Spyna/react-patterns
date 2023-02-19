import AboutPage from "../pages/AboutPage";
import IndexPage from "../pages/IndexPage";
import NotFoundPage from "../pages/NotFoundPage";
import { RoutingConfig } from "../routing/RoutingService";

export const config = {
  todoBaseUrl: "https://jsonplaceholder.typicode.com/todos",
};

export const routingConfig: RoutingConfig = {
  notFoundComponent: NotFoundPage,
  routes: [
    {
      component: IndexPage,
      path: "/",
    },
    {
      component: AboutPage,
      path: "/about",
    },
  ],
};
