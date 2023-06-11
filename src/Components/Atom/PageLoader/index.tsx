import React from "react";
import Typography from "../Typography";
import "./style.css";

interface Props {}
const PageLoader: React.FC<Props> = () => {
  return (
    <div className="page-loader">
      <Typography as="h6" className="" text="Loading..." />
    </div>
  );
};

export default PageLoader;
