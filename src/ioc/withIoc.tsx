import { Context, ReactNode, useMemo } from "react";
import { InversifyContext, IocContainerContext } from "./ContainerContext";
import { container } from "./ioc.config";

export interface ProviderProps {
  context?: Context<InversifyContext>;
  children?: ReactNode;
}

export function withIoc(
  WrappedComponent: React.ElementType
): (props: ProviderProps) => JSX.Element {
  return function Hoc(props: ProviderProps) {
    const contextValue = useMemo(() => ({ container: container }), []);
    return (
      <IocContainerContext.Provider value={contextValue}>
        <WrappedComponent {...props} />
      </IocContainerContext.Provider>
    );
  };
}
