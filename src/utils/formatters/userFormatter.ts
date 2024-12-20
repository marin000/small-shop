import { LoginResponse } from '@/types/login';
import { BaseUserData } from '@/types/user';

export const mapLoginResponseToUserData = (
  data: LoginResponse
): BaseUserData => {
  const { id, username, firstName, lastName, email, image } = data;
  return { id, username, firstName, lastName, email, image };
};
