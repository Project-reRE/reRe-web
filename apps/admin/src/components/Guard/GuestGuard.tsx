import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { PATH } from 'constant/paths';

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard = (props: GuestGuardProps) => {
  const isCustomLogin = localStorage.getItem('isCustomLogin') === 'true';

  if (isCustomLogin) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return props?.children;
};

export default GuestGuard;
