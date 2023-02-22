interface Authorization {
  [key: string]: boolean;
}

export enum Profile {
  User = "user",
  Admin = "admin",
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  authorization: Authorization;
  profile: Profile;
}
