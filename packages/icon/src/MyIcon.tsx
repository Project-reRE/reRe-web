import * as React from 'react';
import { Ref, SVGProps, forwardRef } from 'react';

const MyIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <g clipPath="url(#clip0_806_6887)">
      <path
        d="M11.9996 14.2143C14.3665 14.2143 16.2853 12.2955 16.2853 9.92854C16.2853 7.5616 14.3665 5.64282 11.9996 5.64282C9.63265 5.64282 7.71387 7.5616 7.71387 9.92854C7.71387 12.2955 9.63265 14.2143 11.9996 14.2143Z"
        stroke="#FEFEFE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.67969 20.9001C5.44467 19.6444 6.51982 18.6065 7.80176 17.8865C9.0837 17.1663 10.5293 16.7881 11.9997 16.7881C13.47 16.7881 14.9157 17.1663 16.1976 17.8865C17.4796 18.6065 18.5546 19.6444 19.3197 20.9001"
        stroke="#FEFEFE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9998 23.6429C18.1539 23.6429 23.1426 18.6541 23.1426 12.5C23.1426 6.34601 18.1539 1.35718 11.9998 1.35718C5.84576 1.35718 0.856934 6.34601 0.856934 12.5C0.856934 18.6541 5.84576 23.6429 11.9998 23.6429Z"
        stroke="#FEFEFE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_806_6887">
        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(MyIcon);
export default ForwardRef;
