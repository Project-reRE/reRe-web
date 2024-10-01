import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { PATH } from 'constant/paths';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = (props: AuthGuardProps) => {
  const children = props?.children;
  // const isCustomLogin = localStorage.getItem('isCustomLogin') === 'true';

  // if (!isCustomLogin) {
  //   return <Navigate to={PATH.LOGIN} />;
  // }

  return <>{children}</>;
};

export default AuthGuard;
