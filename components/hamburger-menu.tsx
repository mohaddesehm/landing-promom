import type { NextPage } from "next";
import { useEffect } from "react";

type HamburgerMenuType = {
  onClose?: () => void;
};

const HamburgerMenu: NextPage<HamburgerMenuType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="relative bg-main-white-100 w-[20rem] h-full overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] text-left text-[1rem] text-text-secondary-black-40 font-landing-h9-input-titles"
      data-animate-on-scroll
    >
      <div className="absolute top-[1.5rem] left-[2rem] flex flex-col items-center justify-start">
        <div className="shrink-0 flex flex-row items-center justify-center gap-[0.13rem]">
          <img
            className="relative w-[1.75rem] h-[2rem] object-cover"
            alt=""
            src="/logo2@2x.png"
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
              src="/vector1@2x.png"
            />
            <img
              className="relative w-[0.31rem] h-[0.36rem] object-cover"
              alt=""
              src="/vector2@2x.png"
            />
            <img
              className="relative w-[0.14rem] h-[0.44rem] object-cover"
              alt=""
              src="/vector3@2x.png"
            />
            <img
              className="relative w-[0.2rem] h-[0.34rem] object-cover"
              alt=""
              src="/vector4@2x.png"
            />
            <img
              className="relative w-[0.3rem] h-[0.36rem] object-cover"
              alt=""
              src="/vector5@2x.png"
            />
            <img
              className="relative w-[0.32rem] h-[0.36rem] object-cover"
              alt=""
              src="/vector6@2x.png"
            />
            <img
              className="relative w-[0.14rem] h-[0.44rem] object-cover"
              alt=""
              src="/vector7@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[5.69rem] left-[2rem] flex flex-col items-start justify-center gap-[2rem] sm:hidden">
        <div className="shrink-0 hidden flex-row items-start justify-start py-[0rem] px-[0.25rem]">
          <div className="relative leading-[1.5rem]">Main Functional</div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start py-[0rem] px-[0.25rem]">
          <div className="relative leading-[1.5rem]">Blog</div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start py-[0rem] px-[0.25rem]">
          <div className="relative leading-[1.5rem]">FAQ</div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start py-[0rem] px-[0.25rem]">
          <div className="relative leading-[1.5rem]">Contact Us</div>
        </div>
      </div>
      <a className="[text-decoration:none] absolute top-[16.69rem] left-[calc(50%_-_60px)] flex flex-col items-start justify-center gap-[0.75rem] text-center text-main-green-100 sm:hidden">
        <div className="rounded-lg w-[7.5rem] shrink-0 flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] box-border">
          <div className="flex-1 relative leading-[1.5rem] font-semibold">
            Sign In
          </div>
        </div>
        <div className="rounded-lg bg-main-green-100 w-[7.5rem] shrink-0 flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] box-border text-main-white-100">
          <div className="flex-1 relative leading-[1.5rem] font-semibold">
            Sign Up
          </div>
        </div>
      </a>
    </div>
  );
};

export default HamburgerMenu;
