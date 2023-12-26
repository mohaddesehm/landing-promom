import type { NextPage } from "next";

type TextareaType = {
  label?: string;
  textfiledPlaceholder?: string;
};

const Textarea: NextPage<TextareaType> = ({ label, textfiledPlaceholder }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-left text-[0.75rem] text-text-primary-black-100 font-landing-h9-input-titles">
      <label className="cursor-pointer relative leading-[1rem] font-medium">
        {label}
      </label>
      <textarea
        className="bg-main-green-3 font-landing-h9-input-titles text-[0.88rem] [outline:none] self-stretch rounded-lg flex flex-row items-start justify-between pt-[1.06rem] px-[1rem] pb-[6.19rem] text-text-secondary-black-40 border-[1px] border-solid border-main-stroke"
        placeholder={textfiledPlaceholder}
      />
    </div>
  );
};

export default Textarea;
