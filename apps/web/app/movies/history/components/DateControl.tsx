'use client';

import React, { useCallback, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

import { addMonths, format, subMonths } from 'date-fns';

import { ArrowIcon } from '@repo/icon';

const DateControl = () => {
  const router = useRouter();
  const currentDate = format(new Date(), 'yyyy-MM');
  const [monthData, setMonthData] = useState(currentDate);

  const isNextButton = useMemo(() => !(currentDate <= monthData), [monthData]);

  const handleClickPrevDate = useCallback(() => {
    const date = format(subMonths(monthData, 1), 'yyyy-MM');
    setMonthData(date);
    router.push(`?startDate=${date}`);
  }, [monthData]);

  const handleClickNextDate = useCallback(() => {
    if (!isNextButton) return;
    const date = format(addMonths(monthData, 1), 'yyyy-MM');
    setMonthData(date);
  }, [monthData]);

  return (
    <div className="flex h-11 w-full items-center justify-center gap-5">
      <button onClick={handleClickPrevDate}>
        <ArrowIcon />
      </button>
      <div className="text-3xl font-bold text-white">{monthData}</div>
      <button className="w-[24px] rotate-180" onClick={handleClickNextDate} disabled={!isNextButton}>
        {isNextButton && <ArrowIcon />}
      </button>
    </div>
  );
};

export default DateControl;
