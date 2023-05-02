// import React, { useEffect, useLayoutEffect, useRef } from "react";
import React, { useLayoutEffect } from "react";
import Typography from "Components/Atom/Typography";
import "./style.css";
import Button from "Components/Atom/Button/Button";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

// interface TopNavProps {}
// const TopNav: React.FC<TopNavProps> = () => {
const TopNav = () => {
  // Effects
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Animation
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".scroll-handler"),
        smooth: true,
        multiplier: 0.65,
        // inertia: 0.3,
      });

      locoScroll.on("scroll", scrollTrigger.update);
    });
    return () => ctx.revert();
  }, []);

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
