import { observer } from "mobx-react-lite";
import React, { useCallback, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useInject } from "../ioc/useInject";
import { RoutingService, RoutingServiceType } from "./RoutingService";

export default observer(function CurrentRoute() {
  const routingService = useInject<RoutingService>(RoutingServiceType);
  const routes = routingService.getRoutes();

  const isAuthenticated = useCallback(
    () => routingService.isAuthenticated(),
    [routingService]
  );

  const NotFound = useMemo(
    () => routingService.notFoundComponent(),
    [routingService]
  );

  return (
    <Routes>
      {routes.map((route) => {
        let PageToDisplay: React.FunctionComponent = route.component;
        if (route.auth && !isAuthenticated()) {
          PageToDisplay = routingService.loginComponent();
        }
        return (
          <Route
            key={`route-${route.path}`}
            path={route.path}
            element={<PageToDisplay />}
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
});
