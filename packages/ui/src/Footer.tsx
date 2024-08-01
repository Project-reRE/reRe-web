const Footer = () => {
  return (
    <div className="mt-[140px] flex w-full flex-col items-center justify-center gap-10 bg-[#141414] pb-10">
      <div className="h-px self-stretch bg-[#444444]" />
      <div className="flex h-[84px] flex-col items-center justify-start gap-3 self-stretch">
        <ul className="flex items-start justify-start gap-4">
          <li className="text-Gray70 text-sm font-normal leading-tight">
            <a href="">서비스 이용약관</a>
          </li>
          <li className="text-Gray70 text-sm font-normal leading-tight">
            <a href="">개인정보처리방침</a>
          </li>
          <li className="text-Gray70 text-sm font-normal leading-tight">
            <a href="">운영정책</a>
          </li>
          <li className="text-Gray70 text-sm font-normal leading-tight">
            <a href="">청소년보호정책</a>
          </li>
        </ul>
        <a href="mailto: pevelopment@gmail.com" className="text-Gray70 text-sm font-normal leading-tight">
          문의: pevelopment@gmail.com
        </a>
        <p className="text-Gray70 text-sm font-normal leading-tight">Copyright © reRE 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
