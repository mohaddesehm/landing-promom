import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ButtonType = {
  label?: string;

  /** Style props */
  buttonsBackgroundColor?: CSSProperties["backgroundColor"];
  buttonsBorder?: CSSProperties["border"];
  buttonsPadding?: CSSProperties["padding"];
  buttonsWidth?: CSSProperties["width"];
  buttonsFlexShrink?: CSSProperties["flexShrink"];
  buttonsBoxSizing?: CSSProperties["boxSizing"];
  buttonsAlignSelf?: CSSProperties["alignSelf"];
};

const Button: NextPage<ButtonType> = ({
  label,
  buttonsBackgroundColor,
  buttonsBorder,
  buttonsPadding,
  buttonsWidth,
  buttonsFlexShrink,
  buttonsBoxSizing,
  buttonsAlignSelf,
}) => {
  const buttonsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonsBackgroundColor,
      border: buttonsBorder,
      padding: buttonsPadding,
      width: buttonsWidth,
      flexShrink: buttonsFlexShrink,
      boxSizing: buttonsBoxSizing,
      alignSelf: buttonsAlignSelf,
    };
  }, [
    buttonsBackgroundColor,
    buttonsBorder,
    buttonsPadding,
    buttonsWidth,
    buttonsFlexShrink,
    buttonsBoxSizing,
    buttonsAlignSelf,
  ]);

  return (
    <button
      className="cursor-pointer p-[1.5rem] bg-main-green-150 rounded-lg box-border w-[19.13rem] shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-main-white-100 hover:bg-main-green-150 hover:box-border hover:border-[2px] hover:border-solid hover:border-main-white-100"
      style={buttonsStyle}
    >
      <div className="flex-1 relative text-[1rem] leading-[1.5rem] font-semibold font-landing-h9-input-titles text-main-white-100 text-center">
        {label}
      </div>
    </button>
  );
};

export default Button;
