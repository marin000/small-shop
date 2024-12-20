import React from 'react';
import { Navigate } from 'react-router-dom';
import useUserActions from '@/hooks/useUserActions';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isUserLoggedIn } = useUserActions();

  if (!isUserLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default AuthGuard;
