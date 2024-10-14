import React from 'react';

import { NegativeEmoji, NotSureEmoji, PositiveEmoji } from '@repo/icon';
import { EMOTION_TYPE, NumRank } from '@repo/services';

const emotionTextMap: { [key in EMOTION_TYPE]: string } = {
  [EMOTION_TYPE.긍정적]: '긍정적',
  [EMOTION_TYPE.부정적]: '부정적',
  [EMOTION_TYPE['잘 모름']]: '잘 모름',
};

function getEmotionText(value: EMOTION_TYPE): string {
  return emotionTextMap[value];
}

const Item = ({ emotionType, percent }: { emotionType: EMOTION_TYPE; percent: number }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      {(() => {
        if (emotionType === EMOTION_TYPE.긍정적) return <PositiveEmoji />;
        else if (emotionType === EMOTION_TYPE.부정적) return <NegativeEmoji />;
        else return <NotSureEmoji />;
      })()}
      <div>
        <p className="text-center text-[13px] font-medium text-[#d1d1d1]">{getEmotionText(emotionType)}</p>
        <p className="text-center text-sm font-bold leading-normal text-white">{percent}%</p>
      </div>
    </div>
  );
};

type Props = {
  title: string;
  data?: NumRank[];
};

const EmotionRankCard = ({ title, data }: Props) => {
  const findPercent = (type: EMOTION_TYPE) => {
    return data?.find((el) => el.type === type)?.value ?? 0;
  };

  const positivePercent = findPercent(EMOTION_TYPE.긍정적);
  const negativePercent = findPercent(EMOTION_TYPE.부정적);
  const notSurePercent = findPercent(EMOTION_TYPE['잘 모름']);

  return (
    <div className="flex h-fit w-[471px] flex-col items-center gap-[24px] rounded-[14px] bg-neutral-800 px-[24px] py-[20px]">
      <p className="w-full text-[15px] font-medium text-[#d1d1d1]">{title}</p>
      <div className="flex gap-[64px]">
        <Item emotionType={EMOTION_TYPE.긍정적} percent={positivePercent} />
        <Item emotionType={EMOTION_TYPE.부정적} percent={negativePercent} />
        <Item emotionType={EMOTION_TYPE['잘 모름']} percent={notSurePercent} />
      </div>
    </div>
  );
};

export default EmotionRankCard;
