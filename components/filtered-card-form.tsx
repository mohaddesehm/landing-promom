import type { NextPage } from "next";
import Detail from "./detail";

const FilteredCardForm: NextPage = () => {
  return (
    <div className="w-[52.75rem] flex flex-col items-end justify-start gap-[2rem] text-left text-[1.25rem] text-text-primary-black-100 font-landing-h9-input-titles">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
            <summary className="self-stretch relative leading-[2rem] font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </summary>
            <p className="m-0 self-stretch relative text-[1rem] leading-[1.5rem] text-text-secondary-black-40">
              Lorem ipsum dolor sit amet consectetur. Lectus tellus semper in ut
              curabitur consequat massa neque sagittis. Et massa feugiat tortor
              enim sollicitudin nibh elementum. Egestas mus sit fermentum sem
              enim non diam tortor adipiscing. Luctus elementum sapien faucibus
              hendrerit sagittis eget consequat.
            </p>
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/landing-icons@2x.png"
          />
        </div>
      </div>
      <Detail title="Lorem ipsum dolor sit amet consectetur." />
      <Detail title="Lorem ipsum dolor sit amet consectetur." />
      <Detail title="Lorem ipsum dolor sit amet consectetur." />
      <Detail title="Lorem ipsum dolor sit amet consectetur." />
      <Detail title="Lorem ipsum dolor sit amet consectetur." />
    </div>
  );
};

export default FilteredCardForm;
