'use client';

import React from 'react';

import { Bar, BarChart, CartesianGrid, LabelList, Legend, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleBarChart = () => {
  const productSales = [
    {
      name: '감독의 연출',
      number: '2',
      product1: 500,
    },
    {
      name: '배우의 연기력',
      number: '3',
      product1: 800,
    },
    {
      name: '음악',
      number: '1',
      product1: 300,
    },
  ];

  return (
    <div className="h-[318px] w-[368px] rounded-[14px] bg-neutral-800 py-[20px]">
      <p className="ml-[24px] text-[15px] font-medium text-[#d1d1d1]">최근 5개월 간 평점 추이</p>
      <BarChart width={368} height={250} data={productSales}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444444" />
        <XAxis
          dataKey="name"
          interval={0}
          textAnchor="middle"
          tick={{ fontSize: 11, fontWeight: 600, fill: '#DB7647' }}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          domain={[0, 1000]}
          tickCount={6} // Y축의 눈금을 6개로 설정 (0, 1, 2, 3, 4, 5)
          tick={{ fontSize: 10 }}
          tickLine={false}
          textAnchor="middle"
          tickMargin={10}
        />
        <Bar dataKey="product1" fill="#c85a2782" maxBarSize={30} radius={[50, 50, 0, 0]}>
          <LabelList dataKey="product1" position={'top'} fill="#DB7647" fontWeight={600} fontSize={11} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default SimpleBarChart;
