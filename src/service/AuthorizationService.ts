export interface AuthorizationService {
  hasPermission(permissionName: string): boolean;
}

export const Authorizations = {
  todo: {
    delete: "todo.delete",
  },
};
