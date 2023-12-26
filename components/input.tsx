import type { NextPage } from "next";
import { useState } from "react";

type InputType = {
  label?: string;
  placeholder?: string;
};

const Input: NextPage<InputType> = ({ label, placeholder }) => {
  const [textfiledValue, setTextfiledValue] = useState("");
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-left text-[0.75rem] text-text-primary-black-100 font-landing-h9-input-titles">
      <label className="cursor-pointer relative leading-[1rem] font-medium">
        {label}
      </label>
      <input
        className="[outline:none] font-landing-h9-input-titles text-[0.88rem] bg-main-green-3 self-stretch rounded-lg flex flex-row items-center justify-between py-[0.63rem] px-[1rem] text-text-secondary-black-40 border-[1px] border-solid border-main-stroke"
        placeholder={placeholder}
        type="text"
        value={textfiledValue}
        onChange={(event) => setTextfiledValue(event.target.value)}
      />
    </div>
  );
};

export default Input;
