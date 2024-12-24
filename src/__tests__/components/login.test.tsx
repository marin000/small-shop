import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useLoginRequest } from '../../api/login';
import LoginPage from '../../pages/login/index';
import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn(),
}));

jest.mock('../../api/login', () => ({
  useLoginRequest: jest.fn(),
}));

describe('Login Component', () => {
  const mockMutate = jest.fn();
  const mockT = jest.fn((key) => key);

  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({ t: mockT });
    (useLoginRequest as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
    });

    (useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      formState: { errors: {}, isValid: true },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the login form', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    expect(screen.getByText('login.title')).toBeInTheDocument();
    expect(
      screen.getByLabelText('login.usernameLabel')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('login.passwordLabel')
    ).toBeInTheDocument();
    expect(
      screen.getByText('login.submitButton')
    ).toBeInTheDocument();
  });

  test('disables the submit button when form is invalid', () => {
    (useForm as jest.Mock).mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: { errors: {}, isValid: false },
    });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const submitButton = screen.getByText('login.submitButton');
    expect(submitButton).toBeDisabled();
  });

  test('shows validation error messages', async () => {
    (useForm as jest.Mock).mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: {
        errors: {
          username: { message: 'Invalid username' },
          password: { message: 'Invalid password' },
        },
        isValid: false,
      },
    });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    expect(screen.getByText('Invalid username')).toBeInTheDocument();
    expect(screen.getByText('Invalid password')).toBeInTheDocument();
  });

  test('submits form data correctly', async () => {
    const formData = {
      username: 'testuser',
      password: 'password123',
    };

    (useForm as jest.Mock).mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      formState: { errors: {}, isValid: true },
    });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    fireEvent.change(screen.getByLabelText('login.usernameLabel'), {
      target: { value: formData.username },
    });
    fireEvent.change(screen.getByLabelText('login.passwordLabel'), {
      target: { value: formData.password },
    });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalled();
    });
  });

  test('shows loading state when login is pending', () => {
    (useLoginRequest as jest.Mock).mockReturnValueOnce({
      mutate: mockMutate,
      isPending: true,
    });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const submitButton = screen.getByText('login.submitButton');
    expect(submitButton).toBeDisabled();
  });
});
