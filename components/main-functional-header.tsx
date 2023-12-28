import type { NextPage } from "next";
import { useState, useCallback } from "react";
import HamburgerMenu from "./hamburger-menu";
import PortalDrawer from "./portal-drawer";

const MainFunctionalHeader: NextPage = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const openHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(true);
  }, []);

  const closeHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(false);
  }, []);

  return (
    <>
      <header className="self-stretch bg-main-white-100 box-border h-[5rem] flex flex-row items-center justify-center py-[1rem] px-[5.13rem] border-b-[1px] border-solid border-main-stroke sm:flex">
        <nav className="m-0 flex-1 flex flex-row items-center justify-between text-left text-[1rem] text-text-secondary-black-40 font-landing-h9-input-titles">
          <div className="shrink-0 flex flex-row items-start justify-start py-[0rem] pr-[11.25rem] pl-[0rem]">
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
          <div className="shrink-0 flex flex-row items-center justify-start gap-[2rem] md:hidden sm:hidden">
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
          <a className="[text-decoration:none] shrink-0 flex flex-row items-center justify-start gap-[0.75rem] text-center text-main-green-100 md:hidden sm:hidden">
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
        </nav>
        <button
          className="cursor-pointer p-[0.63rem] bg-main-white-100 rounded-md hidden flex-row items-center justify-center relative gap-[0.63rem] border-[1px] border-solid border-main-stroke md:flex"
          onClick={openHamburgerMenu}
        >
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover z-[0]"
            alt=""
            src="/icon-general@2x.png"
          />
          <div className="my-0 mx-[!important] absolute top-[0rem] left-[1.5rem] rounded-tl-none rounded-tr-lg rounded-br-none rounded-bl-lg bg-main-badge shrink-0 hidden flex-row items-center justify-center p-[0.25rem] z-[1] border-t-[1px] border-solid border-main-stroke border-r-[1px]">
            <img
              className="relative rounded-8xs w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/linear--like--star-shine@2x.png"
            />
          </div>
        </button>
      </header>
      {isHamburgerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeHamburgerMenu}
        >
          <HamburgerMenu onClose={closeHamburgerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default MainFunctionalHeader;
