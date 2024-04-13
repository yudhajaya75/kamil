import React from "react";
import { BsChevronLeft } from "react-icons/bs";

type Props = {
  onClick: () => void;
  buttonText?: string;
};

const GlobalBackButton: React.FC<Props> = ({
  onClick,
  buttonText = "Back",
}) => {
  return (
    <div className="text-2xl pt-10 pl-10 w-[300px]">
      <button onClick={onClick} className="flex items-center">
        <BsChevronLeft />
        <p>{buttonText}</p>
      </button>
    </div>
  );
};

export default GlobalBackButton;
