import type { NextPage } from "next";
import MainFunctionalHeader from "../components/main-functional-header";
import ContainerCard from "../components/container-card";
import FilteredCardFormContainer from "../components/filtered-card-form-container";
import AppContainer from "../components/app-container";
import FilteredCardForm from "../components/filtered-card-form";
import QuestionContainer from "../components/question-container";
import QuestionFormContainer1 from "../components/question-form-container1";
import Button from "../components/button";
import BottomFooter from "../components/bottom-footer";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-[330.44rem] flex flex-col items-start justify-start">
      <section className="self-stretch bg-main-white-100 h-[50.5rem] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[7.13rem] box-border gap-[7.13rem]">
        <MainFunctionalHeader />
        <ContainerCard />
      </section>
      <FilteredCardFormContainer />
      <AppContainer />
      <section className="self-stretch bg-main-green-3 flex flex-col items-center justify-start py-[5rem] px-[0rem] gap-[5rem] text-center text-[2.25rem] text-text-primary-black-100 font-landing-h9-input-titles">
        <div className="w-[52.75rem] flex flex-col items-start justify-start gap-[1rem]">
          <h2 className="m-0 self-stretch relative text-inherit leading-[2.75rem] font-semibold font-inherit">
            Frequently asked questions
          </h2>
          <p className="m-0 self-stretch relative text-[1.25rem] leading-[2rem] text-text-secondary-black-40">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <FilteredCardForm />
        <QuestionContainer />
      </section>
      <QuestionFormContainer1 />
      <section className="self-stretch bg-main-green-3 flex flex-col items-center justify-center pt-[3.75rem] px-[5.13rem] pb-[2rem] gap-[2rem] border-t-[1px] border-solid border-main-stroke">
        <footer className="self-stretch flex flex-row items-center justify-between text-left text-[1rem] text-text-primary-black-100 font-landing-h9-input-titles sm:flex-col md:flex-col">
          <div className="w-[54.38rem] flex flex-col items-start justify-start gap-[1rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[11.25rem] pl-[0rem]">
              <div className="shrink-0 flex flex-col items-center justify-start">
                <div className="shrink-0 flex flex-row items-center justify-center gap-[0.13rem]">
                  <img
                    className="relative w-[1.75rem] h-[2rem] object-cover"
                    alt=""
                    src="/logo@2x.png"
                  />
                  <div className="w-[2.63rem] h-[0.5rem] flex flex-row items-end justify-start gap-[0.06rem]">
                    <img
                      className="relative w-[0.43rem] h-[0.44rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                    <img
                      className="relative w-[0.33rem] h-[0.45rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                    <img
                      className="relative w-[0.31rem] h-[0.36rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                    <img
                      className="relative w-[0.14rem] h-[0.44rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                    <img
                      className="relative w-[0.2rem] h-[0.34rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                    <img
                      className="relative w-[0.3rem] h-[0.36rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                    <img
                      className="relative w-[0.32rem] h-[0.36rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                    <img
                      className="relative w-[0.14rem] h-[0.44rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[2rem]">
              <div className="shrink-0 hidden flex-row items-start justify-start py-[0rem] px-[0.25rem]">
                <div className="relative leading-[1.5rem]">Main Functional</div>
              </div>
              <a className="[text-decoration:none] shrink-0 flex flex-row items-start justify-start py-[0rem] px-[0.25rem] text-[inherit]">
                <span className="relative leading-[1.5rem]">Blog</span>
              </a>
              <a className="[text-decoration:none] shrink-0 flex flex-row items-start justify-start py-[0rem] px-[0.25rem] text-[inherit]">
                <div className="relative leading-[1.5rem]">FAQ</div>
              </a>
              <a className="[text-decoration:none] shrink-0 flex flex-row items-start justify-start py-[0rem] px-[0.25rem] text-[inherit]">
                <span className="relative leading-[1.5rem]">Contact Us</span>
              </a>
            </div>
          </div>
          <Button
            label="Let’s try ProMom"
            buttonsBackgroundColor="#2fa364"
            buttonsBorder="none"
            buttonsPadding="1.5rem"
            buttonsWidth="19rem"
            buttonsFlexShrink="unset"
            buttonsBoxSizing="border-box"
            buttonsAlignSelf="stretch"
          />
        </footer>
        <BottomFooter />
      </section>
    </div>
  );
};

export default Home;
