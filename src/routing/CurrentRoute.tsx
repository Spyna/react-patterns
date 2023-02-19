import { observer } from "mobx-react-lite";
import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useInject } from "../ioc/useInject";
import { RoutingService, RoutingServiceType } from "./RoutingService";

export default observer(function CurrentRoute() {
  const routingService = useInject<RoutingService>(RoutingServiceType);
  const routes = routingService.getRoutes();

  const NotFound = useMemo(
    () => routingService.notFoundComponent(),
    [routingService]
  );

  return (
    <Routes>
      {routes.map((route) => {
        let PageToDisplay = route.component;
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
