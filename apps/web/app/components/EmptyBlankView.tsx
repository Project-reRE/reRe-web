import React from 'react';

import { EmptyIcon } from '@repo/icon';

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const EmptyBlankView = ({ title, description, children }: Props) => {
  return (
    <div className="mt-[200px] flex flex-col items-center gap-[4px]">
      <EmptyIcon />
      {title && <p className="mt-[25px] text-center text-xl font-semibold text-white">{title}</p>}
      {description && <p className="text-center text-base font-medium text-[#919191]">{description}</p>}
      {children && children}
    </div>
  );
};

export default EmptyBlankView;
