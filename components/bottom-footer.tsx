import type { NextPage } from "next";

const BottomFooter: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-right text-[0.88rem] text-text-inactive-black-30 font-landing-h9-input-titles">
      <div className="self-stretch relative bg-main-stroke h-[0.06rem]" />
      <div className="self-stretch flex flex-row items-center justify-start gap-[2rem]">
        <div className="shrink-0 flex flex-row items-start justify-start gap-[1rem]">
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/namefacebook@2x.png"
          />
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/nameinstagram@2x.png"
          />
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/namelinkedin@2x.png"
          />
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/social-media-buttons@2x.png"
          />
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/social-media-buttons1@2x.png"
          />
        </div>
        <span className="flex-1 relative leading-[1.25rem]">
          © 2023 ProMom. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default BottomFooter;
