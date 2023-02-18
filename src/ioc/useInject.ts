import { useContext, useMemo } from "react";
import { IocContainerContext } from "./ContainerContext";
import { ServiceIdentifier } from "./types";

export function useInject<T>(type: ServiceIdentifier<T>) {
  const containerContext = useContext(IocContainerContext);
  const object = useMemo<T>(
    () => containerContext.container.get<T>(type),
    [containerContext, type]
  );
  return object;
}
