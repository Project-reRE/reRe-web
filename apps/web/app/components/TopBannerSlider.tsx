'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { OpenBannerResponseDto } from '@repo/services';

type Props = {
  items: OpenBannerResponseDto[];
};

const TopBannerSlider = ({ items }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const timeoutRef = useRef<NodeJS.Timeout>();
  const setTimer = () => {
    let timeout = setInterval(() => {
      instanceRef.current?.next();
    }, 1000 * 5);
    return timeout;
  };

  const handleResetTimer = () => {
    clearInterval(timeoutRef.current);
    const timeout = setTimer();
    timeoutRef.current = timeout;
  };

  useEffect(() => {
    const timeout = setTimer();
    timeoutRef.current = timeout;
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <div key={index} className="keen-slider__slide flex w-full items-center justify-center">
            <Image
              width={0}
              height={552}
              className="max-h-[552px] w-full object-cover"
              src={item.imageUrl}
              alt={item.title + '배너 이미지'}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[22px] left-1/2 z-10 flex -translate-x-1/2 transform gap-[8px]">
        {items.map((_, index) => (
          <div
            key={index}
            className={
              'rounded-full duration-300 ease-in-out ' +
              (currentSlide === index ? 'w-[24px] bg-white' : 'bg-Gray80 h-[6px] w-[6px]')
            }
          />
        ))}
      </div>
      {/* dim */}
      <div className="to-Gray10 absolute top-0 h-[90px] w-full bg-gradient-to-t from-transparent" />
      <div className="to-Gray10 absolute bottom-0 h-[50px] w-full bg-gradient-to-b from-transparent" />
    </div>
  );
};

export default TopBannerSlider;
