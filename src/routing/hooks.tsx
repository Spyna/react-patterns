import { BrowserRouter, useParams } from "react-router-dom";

export function withRouter(
  WrappedComponent: React.ElementType
): () => JSX.Element {
  return function Hoc() {
    return (
      <BrowserRouter>
        <WrappedComponent />
      </BrowserRouter>
    );
  };
}

export declare type RouterParam<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};

export function useRouterParams(): Readonly<RouterParam<string>> {
  return useParams();
}
