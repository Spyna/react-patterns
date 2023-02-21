interface Authorization {
  [key: string]: boolean;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  authorization: Authorization;
}
