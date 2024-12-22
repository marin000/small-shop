import { mapLoginResponseToUserData } from '../../../utils/formatters/userFormatter';
import { LoginResponse } from '@/types/login';
import { BaseUserData } from '@/types/user';

describe('mapLoginResponseToUserData', () => {
  it('should correctly map login response data to user data', () => {
    const loginResponse: LoginResponse = {
      id: 1,
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      image: 'https://example.com/image.jpg',
      accessToken: 'abc',
      refreshToken: 'abc',
    };

    const expectedUserData: BaseUserData = {
      id: 1,
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      image: 'https://example.com/image.jpg',
    };

    const result = mapLoginResponseToUserData(loginResponse);

    expect(result).toEqual(expectedUserData);
  });

  it('should return undefined properties if they are missing in the response', () => {
    const loginResponse: LoginResponse = {
      id: 1,
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      image: '',
      accessToken: 'abc',
      refreshToken: 'abc',
    };

    const expectedUserData: BaseUserData = {
      id: 1,
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      image: '',
    };

    const result = mapLoginResponseToUserData(loginResponse);

    expect(result).toEqual(expectedUserData);
  });

  it('should correctly handle missing fields in the login response', () => {
    const loginResponse: LoginResponse = {
      id: 1,
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: '',
      image: '',
      accessToken: 'abc',
      refreshToken: 'abc',
    };

    const expectedUserData: BaseUserData = {
      id: 1,
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: '',
      image: '',
    };
    const result = mapLoginResponseToUserData(loginResponse);
    expect(result).toEqual(expectedUserData);
  });
});
