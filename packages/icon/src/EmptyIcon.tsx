import * as React from 'react';
import { Ref, SVGProps, forwardRef } from 'react';

const EmptyIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="211" height="203" viewBox="0 0 211 203" fill="none">
    <g clipPath="url(#clip0_1152_6406)">
      <path
        d="M167.676 203H6.3469C2.82851 203 0 200.138 0 196.656V97.3281C0 93.8115 2.86301 90.9844 6.3469 90.9844H190.338C194.408 90.9844 197.444 94.7768 196.547 98.7417L173.85 198.07C173.195 200.966 170.607 203 167.641 203H167.676Z"
        fill="#CEF622"
      />
      <path
        d="M116.417 165.075C125.943 165.075 133.664 157.357 133.664 147.836C133.664 138.316 125.943 130.598 116.417 130.598C106.892 130.598 99.1704 138.316 99.1704 147.836C99.1704 157.357 106.892 165.075 116.417 165.075Z"
        fill="#FEFEFE"
      />
      <path
        d="M116.659 160.146C123.46 160.146 128.973 154.635 128.973 147.838C128.973 141.04 123.46 135.529 116.659 135.529C109.858 135.529 104.344 141.04 104.344 147.838C104.344 154.635 109.858 160.146 116.659 160.146Z"
        fill="#2B1D20"
      />
      <path
        d="M78.4741 165.075C87.9993 165.075 95.7211 157.357 95.7211 147.836C95.7211 138.316 87.9993 130.598 78.4741 130.598C68.9488 130.598 61.2271 138.316 61.2271 147.836C61.2271 157.357 68.9488 165.075 78.4741 165.075Z"
        fill="#FEFEFE"
      />
      <path
        d="M78.7152 160.146C85.5163 160.146 91.0296 154.635 91.0296 147.838C91.0296 141.04 85.5163 135.529 78.7152 135.529C71.9142 135.529 66.4009 141.04 66.4009 147.838C66.4009 154.635 71.9142 160.146 78.7152 160.146Z"
        fill="#2B1D20"
      />
      <path
        d="M117.004 127.15L127.352 130.598"
        stroke="#2B1D20"
        strokeWidth="8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M79.0601 120.256L68.7119 123.704"
        stroke="#2B1D20"
        strokeWidth="8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M85.959 175.419C91.685 169.696 100.929 169.696 106.655 175.419"
        stroke="#2B1D20"
        strokeWidth="8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6.00196 25.4775C3.89782 27.4427 4.76017 30.9593 7.55419 31.6834L33.2523 38.5787L64.8833 47.06L83.3376 51.9902L114.969 60.4716L133.457 65.4018L165.088 73.8831L183.543 78.8133L198.479 82.8126C200.445 83.3298 202.445 82.192 202.963 80.2268L210.862 50.7836C211.379 48.8184 210.241 46.8187 208.275 46.3016L183.543 39.682L165.088 34.7518L133.457 26.2705L114.969 21.3403L83.3376 12.859L64.8833 7.92877L35.7358 0.136991C34.5285 -0.173301 33.2178 0.136991 32.2864 0.998914L6.00196 25.4775Z"
        fill="#CEF622"
      />
      <path
        d="M33.4247 38.6495L64.5728 46.993C64.5728 46.993 64.8833 46.924 64.8833 46.7516V8.13749C64.8833 8.13749 64.8143 7.93063 64.7108 7.89615L35.5289 0.0698938C34.632 -0.171445 33.7697 0.483617 33.7352 1.41449L33.2178 38.4082C33.2178 38.4082 33.2868 38.6151 33.3902 38.6495H33.4247Z"
        fill="#FE624A"
      />
      <path d="M114.968 21.3407V60.472L83.3374 52.0251V12.8594L114.968 21.3407Z" fill="#FE624A" />
      <path d="M165.089 34.7528V73.9186L133.458 65.4372V26.2715L165.089 34.7528Z" fill="#FE624A" />
      <path
        d="M210.862 50.8184L202.963 80.2616C202.446 82.2268 200.445 83.3646 198.479 82.8474L183.543 78.8481V39.7168L208.275 46.3364C210.241 46.8535 211.38 48.8532 210.862 50.8184Z"
        fill="#FE624A"
      />
    </g>
    <defs>
      <clipPath id="clip0_1152_6406">
        <rect width="211" height="203" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(EmptyIcon);
export default ForwardRef;