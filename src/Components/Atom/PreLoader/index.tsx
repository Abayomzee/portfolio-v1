import React from "react";
import Typography from "../Typography";
import "./style.css";

interface Props {}
const Preloader: React.FC<Props> = () => {
  return (
    <div className="prl-wrapper">
      <div>
        <Typography as="h4" className="prl-text text-center" text="LOADING..." />
        <div className="prl-progress" />
      </div>
    </div>
  );
};
export default Preloader;
