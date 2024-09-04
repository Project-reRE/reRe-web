import React from 'react';

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const EmptyBlankView = ({ title, description, children }: Props) => {
  return (
    <div className="mt-[200px] flex flex-col items-center gap-[4px]">
      <div className="h-[100px] w-[100px] bg-slate-50" />
      {title && <p className="mt-[25px] text-center text-xl font-semibold text-white">{title}</p>}
      {description && <p className="text-center text-base font-medium text-[#919191]">{description}</p>}
      {children && children}
    </div>
  );
};

export default EmptyBlankView;
