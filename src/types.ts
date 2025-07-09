type Role = "guest" | "admin";

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: Role;
}
