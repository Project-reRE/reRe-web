import React from 'react';

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const EmptyBlankView = ({ title, description, children }: Props) => {
  return (
    <div className="flex flex-col gap-[4px] items-center">
      <div className="w-[100px] h-[100px] bg-slate-50" />
      {title && <p className="text-center text-white text-xl font-semibold ">{title}</p>}
      {description && <p className="text-center text-[#919191] text-base font-medium ">{description}</p>}
      {children && children}
    </div>
  );
};

export default EmptyBlankView;
