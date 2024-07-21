'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import '../index.css';
import { useState } from 'react';

type Props = {
  items: any;
};

const TopBannerSlider = ({ items }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    loop: true,
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {items.map((item: any) => (
          <div key={item.id} className="keen-slider__slide flex w-full items-center justify-center">
            <img className="max-h-[552px] w-full object-cover" src={item.imageUrl} alt="아수라" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[22px] left-1/2 flex -translate-x-1/2 transform gap-[8px]">
        {items.map((item: any, index: number) => (
          <div
            key={item.id}
            className={
              'bg-Gray80 h-[6px] w-[6px] rounded-full duration-300 ease-in-out' +
              (currentSlide === index ? ' w-[24px] bg-white' : '')
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
