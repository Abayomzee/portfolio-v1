// import React, { useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import Typography from "Components/Atom/Typography";
import "./style.css";
import Button from "Components/Atom/Button/Button";
// import LocomotiveScroll from "locomotive-scroll";

// interface TopNavProps {}
// const TopNav: React.FC<TopNavProps> = () => {
const TopNav = () => {
  // const scrollRef = useRef();

  // Effects
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll();
  //   scrollRef.current = scroll;
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  // const handleSmoothScrollClick = () => {
  //   console.log(scrollRef.current);
  //   console.log(scrollRef.current.scrollTo);

  //   const sectionSelector = document.getElementById("contact");
  //   scrollRef.current.scrollTo(sectionSelector, {
  //     offset: 0,
  //     callback: function () {},
  //     duration: 600,
  //     easing: [0.25, 0.0, 0.35, 1.0],
  //     disableLerp: true,
  //   });
  // };

  // Data to display
  return (
    <nav className="tn" id="tn" data-scroll>
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
            {/*  <Button
              className={"btn-primary btn-sm btn--contact cursor-effect small"}
              onClick={() => handleSmoothScrollClick()}
              data-scroll-to
            >
              <span>Contact</span>
            </Button> */}
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
