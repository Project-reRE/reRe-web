import { SVGProps, Ref, forwardRef } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 6L9 12L15 18" stroke="white" stroke-width="2" />
  </svg>
);

const ForwardRef = forwardRef(ArrowIcon);
export default ForwardRef;
