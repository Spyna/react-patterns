import { Container } from "inversify";
import React from "react";

export interface InversifyContext {
  container: Container;
}

export const IocContainerContext = React.createContext<InversifyContext>(
  null as any
);
