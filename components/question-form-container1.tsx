import type { NextPage } from "next";
import Input from "./input";
import Textarea from "./textarea";
import Button from "./button";

const QuestionFormContainer1: NextPage = () => {
  return (
    <section className="self-stretch bg-main-white-100 shrink-0 flex flex-row items-center justify-center py-[5rem] px-[5.13rem]">
      <div className="w-[79.75rem] shrink-0 flex flex-row items-center justify-center">
        <div className="flex-1 h-[45rem] flex flex-row items-center justify-center">
          <div className="self-stretch bg-main-white-100 w-[39.88rem] flex flex-col items-center justify-start py-[0rem] px-[6.88rem] box-border sm:items-center sm:justify-center">
            <form className="m-0 w-[31.25rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-center gap-[5rem] md:items-start md:justify-center sm:items-start sm:justify-center">
                <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
                  <h2 className="m-0 self-stretch relative text-[2.25rem] leading-[2.75rem] font-semibold font-landing-h9-input-titles text-text-primary-black-100 text-center">
                    Have a question?
                  </h2>
                  <p className="m-0 self-stretch relative text-[1.25rem] leading-[2rem] font-landing-h9-input-titles text-text-secondary-black-40 text-center">
                    Lorem ipsum dolor sit amet consectetur. Nulla quis aliquet
                    tristique dignissim tortor vitae egestas aenean bibendum
                  </p>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                  <Input label="Last Name" placeholder="Enter your last name" />
                  <Input label="Email" placeholder="Enter your email" />
                  <Textarea
                    label="Message"
                    textfiledPlaceholder="Enter your email"
                  />
                </div>
                <Button
                  label="Send"
                  buttonsBackgroundColor="#2fa364"
                  buttonsBorder="none"
                  buttonsPadding="1.5rem"
                  buttonsWidth="unset"
                  buttonsFlexShrink="unset"
                  buttonsBoxSizing="border-box"
                  buttonsAlignSelf="stretch"
                />
              </div>
            </form>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-start relative gap-[0.63rem] mix-blend-normal md:hidden sm:items-start sm:justify-center">
            <div className="self-stretch flex-1 rounded-lg flex flex-row items-start justify-start z-[0]">
              <img
                className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/rectangle-142@2x.png"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[2rem] left-[2rem] rounded-lg w-[35.88rem] h-[42.63rem] object-cover z-[1]"
              alt=""
              src="/stroke@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionFormContainer1;
