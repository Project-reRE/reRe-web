import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.25 10.5C16.25 13.8137 13.5637 16.5 10.25 16.5C6.93629 16.5 4.25 13.8137 4.25 10.5C4.25 7.18629 6.93629 4.5 10.25 4.5C13.5637 4.5 16.25 7.18629 16.25 10.5ZM15.4314 16.5956C14.0355 17.7833 12.2264 18.5 10.25 18.5C5.83172 18.5 2.25 14.9183 2.25 10.5C2.25 6.08172 5.83172 2.5 10.25 2.5C14.6683 2.5 18.25 6.08172 18.25 10.5C18.25 12.2204 17.7069 13.814 16.7829 15.1187L21.4571 19.7929C21.8476 20.1834 21.8476 20.8166 21.4571 21.2071C21.0666 21.5976 20.4334 21.5976 20.0429 21.2071L15.4314 16.5956Z"
      fill="white"
    />
  </svg>
);

const ForwardRef = forwardRef(SearchIcon);
export default ForwardRef;
