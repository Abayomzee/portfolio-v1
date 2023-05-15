// import React, { useEffect, useLayoutEffect, useRef } from "react";
import React, { useLayoutEffect, useRef, useState } from "react";
import Typography from "Components/Atom/Typography";
import Button from "Components/Atom/Button/Button";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./style.css";
import {
  EmailIcon,
  // GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "Components/Atom/SvgIcons";

gsap.registerPlugin(scrollTrigger);

// interface TopNavProps {}
// const TopNav: React.FC<TopNavProps> = () => {
const TopNav = () => {
  // States
  const [showOptions, setShowOptions] = useState(false);

  // Refs
  let tl = useRef();

  // Method
  const handleShowContactOptions = () => {
    if (showOptions) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setShowOptions(!showOptions);
  };

  // Effects
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Gsap
      tl.current = gsap.timeline({ paused: true }).from(".tn-contact-option", {
        x: 10,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.6,
        // ease: "back.in",
        stagger: {
          each: 0.1,
          from: "end",
        },
      });
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
            <div className="tn-contacts-box">
              <Button
                className={"btn-primary btn-sm btn--contact"}
                onClick={() => handleShowContactOptions()}
              >
                <span>Contact</span>
              </Button>
              <div className="tn-contact-list">
                <a
                  href="mailto:okegbenroabayo@gmail.com"
                  rel="noreferrer"
                  target={"_blank"}
                  className="tn-contact-option cursor-effect small"
                >
                  <EmailIcon />
                  <Typography as="span" className="prg-6" text={`Email`} />
                </a>
                <a
                  href="https://www.linkedin.com/in/okegbenro-abayomi-554952b3/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="tn-contact-option cursor-effect small"
                >
                  <LinkedInIcon />
                  <Typography as="span" className="prg-6" text={`linkedin`} />
                </a>
                <a
                  href="https://www.instagram.com/abayomi.dev/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="tn-contact-option cursor-effect small"
                >
                  <InstagramIcon />
                  <Typography as="span" className="prg-6" text={`Instagram`} />
                </a>
                {/* <a
                  href="https://github.com/Abayomzee"
                  rel="noreferrer"
                  target={"_blank"}
                  className="tn-contact-option cursor-effect small"
                >
                  <GithubIcon />
                  <Typography as="span" className="prg-6" text={`Github`} />
                </a> */}
                <a
                  href="https://twitter.com/Abayomzee"
                  rel="noreferrer"
                  target={"_blank"}
                  className="tn-contact-option cursor-effect small"
                >
                  <TwitterIcon />
                  <Typography as="span" className="prg-6" text={`Twitter`} />
                </a>
              </div>
            </div>
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
