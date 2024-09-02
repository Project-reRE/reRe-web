'use client';

import React, { useState } from 'react';

import { useParams, useRouter, useSearchParams } from 'next/navigation';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { format } from 'date-fns';

import { ArrowIcon } from '@repo/icon';
import { MovieResponseDto, useGetRevaluations } from '@repo/services';
import ReviewCard from '@repo/ui/ReviewCard';
import SimpleAreaChart from '@repo/ui/SimpleAreaChart';
import SimpleBarChart from '@repo/ui/SimpleBarChart';

import EmptyBlankView from 'components/EmptyBlankView';
import ReportModalBody from 'components/ReportModalBody';
import TabPanel from 'components/TabPanel';

import { PATH } from 'constant/path';

type TabType = 'info' | 'review';

type Props = {
  data: MovieResponseDto;
};

const MovieDetailInformation = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const tabValue = (searchParams.get('tabValue') as TabType) ?? 'info';
  const [tabState, setTabState] = useState<TabType>(tabValue);
  const router = useRouter();
  const params = useParams();

  const formattedDate = format(new Date(), 'yyyy-MM');
  const [monthData, setMonthData] = useState(formattedDate);

  const { data: revaluationsData } = useGetRevaluations({ movieId: data.id });
  // const [reviewResults, setReviewResults] = useState(data.)

  const handleChange = (_: React.SyntheticEvent, value: TabType) => {
    setTabState(value);
  };

  const handleClickRevaluation = () => {
    router.push(PATH.MOVIES + `/${params.movieId}/revaluation`);
  };

  return (
    <>
      <div className="flex h-11 w-[1152px] items-center justify-center gap-5 bg-gradient-to-t px-[100px]">
        <button>
          <ArrowIcon />
        </button>
        <div className="text-3xl font-bold text-white">{monthData}</div>
        <button className="rotate-180">{/* <ArrowIcon onClick={()=> setMonthData(0)} /> */}</button>
      </div>
      <div className="container flex flex-col items-center gap-[32px] px-[100px]">
        <Tabs value={tabState} onChange={handleChange} className="w-full">
          <Tab label="재평가 정보" value={'info'} sx={{ width: 80, padding: '13px 0 10px' }} disableRipple />
          <Tab label="다른 평보기" value={'review'} sx={{ width: 80, padding: '13px 0 10px' }} disableRipple />
        </Tabs>
        <TabPanel value={tabState} active={'info'}>
          <SimpleAreaChart />
          <SimpleBarChart />
          {/* <EmptyBlankView title="2024년 7월에는 등록된 재평가가 없어요." description="가장 먼저 평가를 남겨보세요!" /> */}
        </TabPanel>
        <TabPanel value={tabState} active={'review'} className="grid grid-cols-2 gap-[16px]">
          <ReviewCard />
          <ReviewCard />
          {revaluationsData?.results.map((item) => <ReviewCard item={item} key={item.id} />)}
        </TabPanel>

        <button
          className="bg-Orange50 h-14 w-[341px] rounded-[10px] text-center text-2xl font-medium text-white"
          onClick={handleClickRevaluation}
        >
          재평가하기
        </button>
        <ReportModalBody />
      </div>
    </>
  );
};

export default MovieDetailInformation;
