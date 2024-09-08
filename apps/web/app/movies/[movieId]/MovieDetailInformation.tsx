'use client';

import React, { useCallback, useMemo, useState, useTransition } from 'react';

import { useParams, useRouter, useSearchParams } from 'next/navigation';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { addMonths, format, subMonths } from 'date-fns';

import { ArrowIcon } from '@repo/icon';
import { GetListType, MovieResponseDto, RevaluationResponseDto } from '@repo/services';
import EmotionRankCard from '@repo/ui/EmotionRankCard';
import PieCharts from '@repo/ui/PieCharts';
import ReviewCard from '@repo/ui/ReviewCard';
import SimpleAreaChart from '@repo/ui/SimpleAreaChart';
import SimpleBarChart from '@repo/ui/SimpleBarChart';
import ValuationTotalCard from '@repo/ui/ValuationTotalCard';

import { convertAgeTypeToKeyValueObjectArray } from 'utils/convertKeyValueObjectArray';

import EmptyBlankView from 'components/EmptyBlankView';
import TabPanel from 'components/TabPanel';

import { PATH } from 'constant/path';

type TabType = 'info' | 'review';

type Props = {
  movieData?: MovieResponseDto;
  revaluationData?: GetListType<RevaluationResponseDto>;
};

const MovieDetailInformation = ({ movieData, revaluationData }: Props) => {
  const searchParams = useSearchParams();
  const tabValue = (searchParams.get('tabValue') as TabType) ?? 'info';
  const [tabState, setTabState] = useState<TabType>(tabValue);
  const router = useRouter();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const currentDate = format(new Date(), 'yyyy-MM');
  const [monthData, setMonthData] = useState(currentDate);
  const targetStatistics = useMemo(
    () => movieData?.statistics.find((el) => el.currentDate === monthData),
    [movieData, monthData]
  );
  const isNextButton = useMemo(() => !(currentDate <= monthData), [monthData]);

  const handleChange = (_: React.SyntheticEvent, value: TabType) => {
    setTabState(value);
  };

  const handleClickRevaluation = () => {
    startTransition(() => router.push(PATH.MOVIES + `/${params.movieId}/revaluation`));
  };

  const handleClickPrevDate = useCallback(() => {
    const date = format(subMonths(monthData, 1), 'yyyy-MM');
    setMonthData(date);
  }, [monthData]);

  const handleClickNextDate = useCallback(() => {
    if (!isNextButton) return;
    const date = format(addMonths(monthData, 1), 'yyyy-MM');
    setMonthData(date);
  }, [monthData]);

  const handleClickGoMovieButton = () => {
    window.open(`https://serieson.naver.com/v3/search?query=${movieData?.data.title}`);
  };

  return (
    <>
      <div className="flex h-11 w-[1152px] items-center justify-center gap-5 bg-gradient-to-t px-[100px]">
        <button onClick={handleClickPrevDate}>
          <ArrowIcon />
        </button>
        <div className="text-3xl font-bold text-white">{monthData}</div>
        <button className="w-[24px] rotate-180" onClick={handleClickNextDate} disabled={!isNextButton}>
          {isNextButton && <ArrowIcon />}
        </button>
      </div>
      <div className="container flex flex-col items-center gap-[32px] px-[100px]">
        <Tabs value={tabState} onChange={handleChange} className="w-full">
          <Tab label="재평가 정보" value={'info'} sx={{ width: 80, padding: '13px 0 10px' }} disableRipple />
          <Tab label="다른 평보기" value={'review'} sx={{ width: 80, padding: '13px 0 10px' }} disableRipple />
        </Tabs>
        {targetStatistics && revaluationData ? (
          <>
            <TabPanel value={tabState} active={'info'} className="flex flex-col items-center gap-[32px]">
              <div className="flex w-full flex-wrap gap-[10px]">
                <SimpleAreaChart data={targetStatistics.numRecentStars} />
                <SimpleBarChart data={[]} />
                <EmotionRankCard
                  title="개봉 당시, 이 영화에 대해서 사람들은요"
                  data={targetStatistics.numPastValuation}
                />
                <EmotionRankCard
                  title="7월에 이 영화에 대해서 사람들은요"
                  data={targetStatistics.numPresentValuation}
                />
              </div>
              <button
                className="h-14 w-[341px] rounded-[10px] bg-[#749037] text-center text-2xl font-medium text-white"
                onClick={handleClickGoMovieButton}
              >
                영화 보러가기
              </button>
              <div className="flex w-full flex-wrap gap-[10px]">
                <ValuationTotalCard
                  numStarsParticipants={targetStatistics.numStarsParticipants}
                  currentMonth={format(monthData, 'M')}
                />
                <PieCharts data={convertAgeTypeToKeyValueObjectArray(targetStatistics.numAge)} />
              </div>
            </TabPanel>
            <TabPanel value={tabState} active={'review'} className="grid grid-cols-2 gap-[16px]">
              {revaluationData?.results.map((item) => <ReviewCard item={item} key={item.id} />)}
            </TabPanel>
            <button
              className="bg-Orange50 h-14 w-[341px] rounded-[10px] text-center text-2xl font-medium text-white"
              onClick={handleClickRevaluation}
            >
              재평가하기
            </button>
          </>
        ) : (
          <EmptyBlankView
            title={`${format(monthData, 'yyyy')}년 ${format(monthData, 'M')}월에는 등록된 재평가가 없어요.`}
            description="가장 먼저 평가를 남겨보세요!"
            children={
              <button
                className="bg-Orange50 mt-[48px] h-14 w-[341px] rounded-[10px] text-center text-2xl font-medium text-white"
                onClick={handleClickRevaluation}
              >
                재평가하기 {isPending && <span>이동중</span>}
              </button>
            }
          />
        )}

        {/* <ReportModalBody /> */}
      </div>
    </>
  );
};

export default MovieDetailInformation;
