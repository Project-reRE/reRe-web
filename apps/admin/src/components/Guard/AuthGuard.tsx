import type { ReactNode } from 'react';

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
