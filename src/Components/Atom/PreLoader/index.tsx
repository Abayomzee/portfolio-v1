import React from "react";

interface Props {}
const Preloader: React.FC<Props> = () => {
  return (
    <div className="prl-wrapper">
      <div className="prl-progress" />
    </div>
  );
};
export default Preloader;
