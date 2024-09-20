import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const KakaoSocialIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
    <path
      d="M9.9998 0.000387192C4.47766 0.000387192 0 3.5358 0 7.89954C0 10.7025 1.85458 13.1635 4.63972 14.5682L3.69748 18.0854C3.66142 18.1933 3.69133 18.3077 3.76959 18.3855C3.82348 18.4398 3.89539 18.4697 3.97345 18.4697C4.03368 18.4697 4.09351 18.4458 4.1476 18.4038L8.1991 15.6666C8.78752 15.7506 9.38782 15.7985 9.9998 15.7985C15.5219 15.7985 20 12.2633 20 7.89954C20 3.5358 15.5219 0.000387192 9.9998 0.000387192Z"
      fill="#3C1E1E"
    />
  </svg>
);

const ForwardRef = forwardRef(KakaoSocialIcon);
export default ForwardRef;
