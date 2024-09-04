'use client';

import React from 'react';

import { Bar, BarChart, CartesianGrid, Cell, Label, LabelList, XAxis, YAxis } from 'recharts';

import { ColorMap } from '@repo/tailwind-config/theme';

const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const COLORS = [ColorMap.Orange60, ColorMap.Green60, ColorMap.Cyan60];

  const fillColor =
    payload.value === '감독의 연출' ? COLORS[0] : payload.value === '배우의 연기력' ? COLORS[1] : COLORS[2];

  return (
    <text x={x} y={y + 10} textAnchor="middle" fill={fillColor} fontSize={11} fontWeight={600}>
      {payload.value}
    </text>
  );
};

const SimpleBarChart = ({ data }: { data: [] }) => {
  const COLORS = [ColorMap.Orange40, ColorMap.Green40, ColorMap.Cyan40];
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
      <p className="ml-[24px] text-[15px] font-medium text-[#d1d1d1]">주목 포인트는?</p>
      <BarChart
        width={300}
        height={250}
        data={productSales}
        margin={{
          top: 33,
          left: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444444" />
        <XAxis
          dataKey="name"
          interval={0}
          textAnchor="middle"
          tick={<CustomXAxisTick />}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          domain={[0, 1000]}
          tickCount={6}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <Bar dataKey="product1" maxBarSize={30} radius={[50, 50, 0, 0]}>
          {productSales.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.4} />
          ))}
          <Label />
          <LabelList dataKey="product1" position={'top'} fontWeight={600} fontSize={11} opacity={1} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default SimpleBarChart;
