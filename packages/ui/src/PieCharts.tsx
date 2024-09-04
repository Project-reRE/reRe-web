'use client';

import React from 'react';

import { Bar, BarChart, CartesianGrid, Cell, Label, LabelList, Pie, PieChart, XAxis, YAxis } from 'recharts';

import { AgeType } from '@repo/services';
import { ColorMap } from '@repo/tailwind-config/theme';

const PieCharts = ({ data }: { data: { [key: string]: number }[] }) => {
  const COLORS = ['#DB7647', '#79A56F', '#73A0A6', '#45686C', '#47628F'];

  console.log(data);

  return (
    <div className="flex h-[246px] w-[405px] items-center justify-center rounded-[14px] bg-neutral-800 py-[20px]">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          innerRadius={55}
          outerRadius={80}
          paddingAngle={5}
          dataKey="numParticipation"
          radius={30}
          stroke={'none'}
          startAngle={-200}
          cornerRadius={3}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieCharts;
