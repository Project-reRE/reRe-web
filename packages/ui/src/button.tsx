'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  callback?: () => void;
}

const Button = ({ callback, children, className }: ButtonProps) => {
  return (
    <button
      className={`bg-Orange50 mt-[48px] h-14 w-[341px] rounded-[10px] text-center text-2xl font-medium text-white ${className}`}
      onClick={() => callback && callback()}
    >
      {children}
    </button>
  );
};

export default Button;
