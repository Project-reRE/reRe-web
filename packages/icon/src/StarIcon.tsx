import * as React from 'react';
import { Ref, SVGProps, forwardRef } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#C85A27" viewBox="0 0 16 16" {...props}>
    <path d="M7.99964 12.6885L4.10939 15.0345C3.96439 15.1191 3.81914 15.1547 3.67364 15.1412C3.52814 15.1277 3.39647 15.0787 3.27864 14.9942C3.16064 14.9096 3.06956 14.799 3.00539 14.6625C2.94139 14.526 2.93114 14.375 2.97464 14.2095L4.00739 9.79223L0.572892 6.81923C0.444559 6.70773 0.362809 6.57857 0.327642 6.43173C0.292309 6.2849 0.301559 6.14224 0.355392 6.00374C0.409226 5.8654 0.486809 5.75232 0.588142 5.66449C0.689476 5.57665 0.827976 5.51924 1.00364 5.49224L5.53614 5.09623L7.29589 0.924988C7.35989 0.769821 7.45697 0.655071 7.58714 0.580737C7.71731 0.506404 7.85481 0.469238 7.99964 0.469238C8.14447 0.469238 8.28197 0.506404 8.41214 0.580737C8.54231 0.655071 8.63939 0.769821 8.70339 0.924988L10.4631 5.09623L14.9956 5.49224C15.1713 5.51924 15.3098 5.57665 15.4111 5.66449C15.5125 5.75232 15.5901 5.8654 15.6439 6.00374C15.6977 6.14224 15.707 6.2849 15.6716 6.43173C15.6365 6.57857 15.5547 6.70773 15.4264 6.81923L11.9919 9.79223L13.0246 14.2095C13.0681 14.375 13.0579 14.526 12.9939 14.6625C12.9297 14.799 12.8386 14.9096 12.7206 14.9942C12.6028 15.0787 12.4711 15.1277 12.3256 15.1412C12.1801 15.1547 12.0349 15.1191 11.8899 15.0345L7.99964 12.6885Z" />
  </svg>
);

const ForwardRef = forwardRef(StarIcon);
export default ForwardRef;
