import type { NextPage } from "next";

type DetailType = {
  title?: string;
};

const Detail: NextPage<DetailType> = ({ title }) => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] text-left text-[1.25rem] text-text-primary-black-100 font-landing-h9-input-titles">
      <div className="self-stretch relative bg-gray-200 h-[0.06rem]" />
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
        <summary className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[2rem] font-semibold">
            {title}
          </div>
        </summary>
        <img
          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/landing-icons1@2x.png"
        />
      </div>
    </div>
  );
};

export default Detail;
