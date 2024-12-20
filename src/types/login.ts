export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  id: number | undefined;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}
