export type UserCredentials = {
  email: string;
  password: string;
  name?: string;
}

export type AuthResponse = {
  success: boolean;
  message: string;
  userId?: string;
} 