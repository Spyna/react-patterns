export type Newable<T> = new (...args: never[]) => T;
export interface Abstract<T> {
  prototype: T;
}
export type ServiceIdentifier<T = unknown> =
  | string
  | symbol
  | Newable<T>
  | Abstract<T>;
