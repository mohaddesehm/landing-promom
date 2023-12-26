import type { NextPage } from "next";
import Button from "./button";

const ContainerCard: NextPage = () => {
  return (
    <div className="flex flex-row items-end justify-start text-left text-[3.75rem] text-text-primary-black-100 font-landing-h9-input-titles">
      <div className="shrink-0 flex flex-row items-end justify-start gap-[4.56rem] md:flex-col">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[3.75rem] md:flex sm:h-auto sm:gap-[3.75rem] sm:pt-[0rem] sm:box-border">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[2rem]">
            <h1 className="m-0 relative text-inherit leading-[4.5rem] font-bold font-inherit inline-block w-[39.25rem]">
              <p className="m-0">{`ProMom - a miracle `}</p>
              <p className="m-0">for pregnant women</p>
            </h1>
            <p className="m-0 relative text-[1.25rem] leading-[2rem] text-text-secondary-black-40 inline-block w-[39.25rem]">
              Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing
              massa vitae auctor mi massa. Sodales libero viverra cursus sed
              duis luctus nulla. In malesuada vulputate pharetra ipsum orci.
            </p>
          </div>
          <Button label="Let’s try ProMom" />
        </div>
        <img
          className="max-h-full w-[41.06rem] object-cover md:flex md:items-center md:justify-center sm:flex"
          alt=""
          src="/devices@2x.png"
        />
      </div>
    </div>
  );
};

export default ContainerCard;
