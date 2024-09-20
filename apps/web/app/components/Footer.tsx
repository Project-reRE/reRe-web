import React from 'react';

import { LINK } from '../constant/link';

const Footer = () => {
  return (
    <footer className="container absolute flex w-full flex-col items-center justify-center gap-[12px] border-t-[1px] border-[#444] bg-[#141414] py-10">
      <ul className="flex items-start justify-start gap-4">
        <li className="text-Gray70 text-sm font-normal leading-tight">
          <a href={LINK.termsOfService}>서비스 이용약관</a>
        </li>
        <li className="text-Gray70 text-sm font-normal leading-tight">
          <a href={LINK.privacyPolicy}>개인정보처리방침</a>
        </li>
        <li className="text-Gray70 text-sm font-normal leading-tight">
          <a href={LINK.operatingPolicy}>운영정책</a>
        </li>
      </ul>
      <a href="mailto: pevelopment@gmail.com" className="text-Gray70 text-sm font-normal leading-tight">
        문의: pevelopment@gmail.com
      </a>
      <p className="text-Gray70 text-sm font-normal leading-tight">Copyright © reRE 2024. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
