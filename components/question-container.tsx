import type { NextPage } from "next";
import Button from "./button";

const QuestionContainer: NextPage = () => {
  return (
    <div className="w-[79.75rem] flex flex-col items-start justify-start text-center text-[1.25rem] text-gray-900 font-landing-h9-input-titles">
      <div className="self-stretch rounded-2xl bg-main-white-100 flex flex-col items-center justify-start p-[2rem] gap-[2rem] border-[1px] border-solid border-main-stroke">
        <div className="relative w-[7.5rem] h-[3.5rem]">
          <img
            className="absolute top-[0.5rem] left-[0rem] rounded-181xl w-[3rem] h-[3rem] object-cover"
            alt=""
            src="/avatar@2x.png"
          />
          <img
            className="absolute top-[0.5rem] left-[4.5rem] rounded-181xl w-[3rem] h-[3rem] object-cover"
            alt=""
            src="/avatar1@2x.png"
          />
          <img
            className="absolute top-[0rem] left-[2rem] rounded-181xl w-[3.5rem] h-[3.5rem] object-cover"
            alt=""
            src="/avatar2@2x.png"
          />
        </div>
        <div className="w-[48rem] flex flex-col items-center justify-start gap-[0.5rem]">
          <h2 className="m-0 self-stretch relative text-inherit leading-[2rem] font-semibold font-inherit">
            Still have questions?
          </h2>
          <p className="m-0 relative text-[1.13rem] leading-[1.75rem] text-gray-500 inline-block w-[48rem]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <div className="flex flex-row items-start justify-start">
          <Button
            label="Get in touch"
            buttonsBackgroundColor="#2fa364"
            buttonsBorder="none"
            buttonsPadding="0.75rem 1.5rem"
            buttonsWidth="11.25rem"
            buttonsFlexShrink="0"
            buttonsBoxSizing="border-box"
            buttonsAlignSelf="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
