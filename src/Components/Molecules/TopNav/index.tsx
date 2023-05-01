import React from "react";
import Typography from "Components/Atom/Typography";
import "./style.css";
import Button from "Components/Atom/Button/Button";

interface TopNavProps {}
const TopNav: React.FC<TopNavProps> = () => {
  return (
    <nav className="tn" data-scroll>
      <div className="center">
        <div className="tn-wrapper">
          <div className="tn-left">
            <div className="tn-stack-ele">
              <Typography
                as="h6"
                className="hd-1 cursor-effect small"
                text="Abayomi"
              />
              <Typography
                as="h6"
                className="hd-1 cursor-effect small"
                text="Okegbenro"
              />
            </div>
            <div className="tn-stack-ele">
              <Typography
                as="h6"
                className="hd-1 cursor-effect small"
                text="Frontend Develper"
              />
              <Typography
                as="h6"
                className="hd-1 cursor-effect small"
                text="portfolio v1"
              />
            </div>
          </div>
          <div className="tn-right">
            <Typography as="span" className="hd-2" text="👉" />
            <Button
              className={"btn-primary btn-sm btn--contact cursor-effect small"}
              onClick={() => {}}
            >
              <span>Contact</span>
            </Button>
            <Button
              className={"btn-primary btn-sm btn--resume cursor-effect small"}
            >
              <span>Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
