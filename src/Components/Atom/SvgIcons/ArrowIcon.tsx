import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  childClassName?: string;
}
const ArrowIcon: React.FC<Props> = (props) => {
  // Props
  const { width, height, className, childClassName } = props;

  //   Data to render
  return (
    <svg
      width={width || "17"}
      height={height || "17"}
      className={className ? className : ""}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={childClassName ? childClassName : ""}
        d="M12.5 1V24"
        stroke="#A9A9A9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={childClassName ? childClassName : ""}
        d="M24 12.5L12.5 24L1 12.5"
        stroke="#A9A9A9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
