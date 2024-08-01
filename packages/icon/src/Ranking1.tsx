import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Ranking1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="49" viewBox="0 0 23 49" fill="none">
    <path
      d="M12.9744 0.5H21.52V47.74H11.54V11.28V10.3903L10.78 10.8529L0.5 17.1103V7.72815L12.9744 0.5Z"
      fill="black"
      stroke="white"
    />
  </svg>
);

const ForwardRef = forwardRef(Ranking1Icon);
export default ForwardRef;
