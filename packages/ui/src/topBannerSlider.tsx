'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import '../index.css';

type Props = {
  items: any;
};

const TopBannerSlider = ({ items }: Props) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    slideChanged() {
      console.log('slide changed');
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider w-full h-[340px]">
        {items.map((item: any) => (
          <div key={item.id} className="keen-slider__slide w-full h-[340px] flex items-center justify-center">
            <img
              className="w-full h-auto"
              src="https://s3-alpha-sig.figma.com/img/5fb5/b9b4/efb9dc95a764f5f33d5f427c92e0ff33?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o5~9bpeYDx5xlQZ7kxE06ZPobV~JFvFMTfCxwPeOl36uPxNfQYZel~RxqtpbJg8tajKc8K6YxK1MkXBEF-T6pmLsXNwKSiPyz2PgXYW6aQqeopCBFjkA8zth~6jz8ctC9URZV4jGZ6s7vaqEha7hP3PYKlc6F6UX6yAJhfHlN5qZ3IFRyvKsPXJ1x3-QUw5ZdEUghYs9VS7zUKkRlij9ASyNi2JroDgD7kKpdGVmIQBfUNrb0pqvcwAneI3zFO3aOHIe~4k1U39YMr4VIhzSrvzzwRyhL4ErkkmhEj0pjxQMyfurzLnz7BsIgfDnP2c7WyLD6RkOEhboEL6~lWkXaw__"
              alt="아수라"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopBannerSlider;
