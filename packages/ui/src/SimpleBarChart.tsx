'use client';

import React from 'react';

import { Bar, BarChart, CartesianGrid, Cell, Label, LabelList, XAxis, YAxis } from 'recharts';

import { MOVIE_SPECIAL_POINT_NAME, NumRank } from '@repo/services';
import { ColorMap } from '@repo/tailwind-config/theme';

const movieSpecialPointMap: { [key in MOVIE_SPECIAL_POINT_NAME]: string } = {
  [MOVIE_SPECIAL_POINT_NAME.PLANNING_INTENT]: '기획 의도',
  [MOVIE_SPECIAL_POINT_NAME.DIRECTORS_DIRECTION]: '감독의 연출',
  [MOVIE_SPECIAL_POINT_NAME.ACTING_SKILLS]: '출연진 연기력',
  [MOVIE_SPECIAL_POINT_NAME.SCENARIO]: '시나리오',
  [MOVIE_SPECIAL_POINT_NAME.OST]: 'OST',
  [MOVIE_SPECIAL_POINT_NAME.SOCIAL_ISSUES]: '음향적사회적 요소',
  [MOVIE_SPECIAL_POINT_NAME.VISUAL_ELEMENT]: '시각적 요소',
  [MOVIE_SPECIAL_POINT_NAME.SOUND_ELEMENT]: '음향적 이슈',
};

function getSpecialPointText(key: MOVIE_SPECIAL_POINT_NAME): string {
  return movieSpecialPointMap[key];
}

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

const SimpleBarChart = ({ data }: { data: NumRank[] }) => {
  const COLORS = [ColorMap.Orange40, ColorMap.Green40, ColorMap.Cyan40];

  const productSales = data.map((el) => {
    return { ...el, type: getSpecialPointText(el.type as MOVIE_SPECIAL_POINT_NAME) };
  });

  console.log(productSales, MOVIE_SPECIAL_POINT_NAME.ACTING_SKILLS, movieSpecialPointMap['시각적 요소']);

  const maxLength =
    data.reduce((max, item) => {
      return item.value > (max?.value ?? 0) ? item : max;
    }, data[0])?.value ?? 100;

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
          dataKey="type"
          interval={0}
          textAnchor="middle"
          tick={<CustomXAxisTick />}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          domain={[0, maxLength]}
          tickCount={6}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <Bar dataKey="value" maxBarSize={30} radius={[50, 50, 0, 0]}>
          {productSales.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.4} />
          ))}
          <Label />
          <LabelList dataKey="value" position={'top'} fontWeight={600} fontSize={11} opacity={1} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default SimpleBarChart;
