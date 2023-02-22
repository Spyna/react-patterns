import { Profile } from "../domain/User";

export interface AuthorizationService {
  hasPermission(permissionName: string): boolean;

  getProfile(): Profile | undefined;
}

export const Permissions = {
  todo: {
    delete: "todo.delete",
  },
};
