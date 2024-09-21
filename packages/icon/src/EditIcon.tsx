import { Ref, SVGProps, forwardRef } from 'react';

const EditIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <g clip-path="url(#clip0_806_6990)">
      <path
        d="M11.4619 3.93547C11.7407 3.65664 12.1189 3.5 12.5132 3.5C12.7085 3.5 12.9018 3.53846 13.0822 3.61318C13.2626 3.68789 13.4265 3.79741 13.5645 3.93547C13.7026 4.07353 13.8121 4.23744 13.8868 4.41782C13.9615 4.59821 14 4.79154 14 4.98679C14 5.18204 13.9615 5.37538 13.8868 5.55576C13.8121 5.73615 13.7026 5.90005 13.5645 6.03811L4.80352 14.7991L2 15.5L2.70088 12.6965L11.4619 3.93547Z"
        stroke="#787878"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_806_6990">
        <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(EditIcon);
export default ForwardRef;
