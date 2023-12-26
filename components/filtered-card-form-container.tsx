import type { NextPage } from "next";

const FilteredCardFormContainer: NextPage = () => {
  return (
    <section className="bg-main-green-3 shrink-0 flex flex-col items-center justify-start py-[5rem] px-[11.88rem] text-center text-[2.25rem] text-text-primary-black-100 font-landing-h9-input-titles">
      <div className="w-[66.25rem] flex flex-col items-center justify-center">
        <div className="w-[89.31rem] h-[59rem] flex flex-col items-center justify-start">
          <div className="w-[89.31rem] flex flex-col items-center justify-start gap-[5.38rem]">
            <div className="w-[52.75rem] flex flex-col items-start justify-start gap-[1rem]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[2.75rem] font-semibold font-inherit">
                How does it work?
              </h2>
              <p className="m-0 self-stretch relative text-[1.25rem] leading-[2rem] text-text-secondary-black-40">{`Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing massa vitae auctor mi massa. Sodales libero viverra cursus sed duis luctus nulla. In malesuada vulputate `}</p>
            </div>
            <img
              className="max-h-full w-[66.25rem] object-cover"
              alt=""
              src="/video@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilteredCardFormContainer;
