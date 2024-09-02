'use client';

import React from 'react';

import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleAreaChart = () => {
  const productSales = [
    {
      name: '2월',
      number: '2',
      product1: 5,
    },
    {
      name: '3월',
      number: '3',
      product1: 2,
    },
    {
      name: '1월',
      number: '1',
      product1: 4,
    },
    {
      name: '4월',
      number: '4',
      product1: 3,
    },
    {
      name: '5월',
      number: '5',
      product1: 2,
    },
    {
      name: '6월',
      number: '6',
      product1: 5,
    },
  ];

  return (
    <div className="h-[318px] w-[574px] rounded-[14px] bg-neutral-800 py-[20px]">
      <p className="ml-[24px] text-[15px] font-medium text-[#d1d1d1]">최근 5개월 간 평점 추이</p>
      <AreaChart
        width={574}
        height={250}
        data={productSales}
        margin={{
          top: 33,
          right: 34,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444444" />
        <Area
          type="monotone"
          dataKey="product1"
          stroke="#C85A27"
          fill="#c85a2782"
          dot={{ r: 4, fill: '#C85A27', fillOpacity: 1 }}
        />
        <XAxis
          dataKey="name"
          interval={0}
          textAnchor="middle"
          tick={{ fontSize: 10 }}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          tickCount={6} // Y축의 눈금을 6개로 설정 (0, 1, 2, 3, 4, 5)
          domain={[0, 5]} // Y축의 범위를 고정
          tick={{ fontSize: 10 }}
          tickLine={false}
          textAnchor="middle"
          tickMargin={10}
        />
      </AreaChart>
    </div>
  );
};

export default SimpleAreaChart;
