'use client';

import React from 'react';

import { EmptyIcon } from '@repo/icon';
import Button from '@repo/ui/Button';

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  element?: 'button';
  btnTxt?: string;
};

const EmptyBlankView = ({ title, description, children, element = 'button', btnTxt }: Props) => {
  const callback = () => {
    document.getElementById('searchInput')?.focus();
  };

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex w-fit flex-col items-center gap-[4px]">
        <EmptyIcon />
        {title && <p className="mt-[25px] whitespace-pre text-center text-xl font-semibold text-white">{title}</p>}
        {description && (
          <p className="whitespace-pre text-center text-base font-medium text-[#919191]">{description}</p>
        )}
        {children && children}
        {element && btnTxt && <Button callback={callback}>{btnTxt}</Button>}
      </div>
    </div>
  );
};

export default EmptyBlankView;
