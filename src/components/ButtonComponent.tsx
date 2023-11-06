import React, { ReactNode } from "react";

interface Props {
  text: string;
  colorclass: string;
  onClick: () => void;
}

const ButtonComponent = ({ text, colorclass, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + colorclass} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
