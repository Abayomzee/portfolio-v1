import React from "react";

interface Props {}
const EmailIcon: React.FC<Props> = () => {
  //   Data to render
  return (
    <svg
      width="23"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.98267 1.37671H19.9827C21.0827 1.37671 21.9827 2.27671 21.9827 3.37671V15.3767C21.9827 16.4767 21.0827 17.3767 19.9827 17.3767H3.98267C2.88267 17.3767 1.98267 16.4767 1.98267 15.3767V3.37671C1.98267 2.27671 2.88267 1.37671 3.98267 1.37671Z"
        stroke="#A9A9A9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9827 3.37671L11.9827 10.3767L1.98267 3.37671"
        stroke="#A9A9A9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmailIcon;
