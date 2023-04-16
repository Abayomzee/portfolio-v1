import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import cssRule from "gsap/CSSRulePlugin";
// import scrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(scrollTrigger);

const useDemoAnimation = () => {
  // Refs
  let tl = useRef<any>();

  // Selectors
  const topNav = ".tn";
  const heading = ".heading";
  const char = ".heading-char";
  const charNoDot = ".heading-char:not([data-char='.'])";
  const headingLine = ".hd-heading-divder";
  const headerImage = ".hd-project-slider";
  const headerImagePic = ".hd-project-img";
  const headerSubHeading = ".hd-sub-heading-text";

  const projectsSection = ".prj";
  const projectsScrollDownIndicator = ".prj-scroll-indicator";
  const projectsScrollDownArrow = ".prj-scroll-arrow";
  const projectCardName = ".prjc-name-and-tools";
  // const projectCardName = ".prjc-name";
  // const projectCardTools = ".prjc-tools";

  // Effects
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let prjHeaderBefore = cssRule.getRule(".prj-wrapper-header::before");
      let prjHeaderAfter = cssRule.getRule(".prj-wrapper-header::after");
      let prjCardsAfter = cssRule.getRule(
        ".prjc-column:not(:last-child)::after"
      );
      let prjRowsAfter = cssRule.getRule(".prj-row::after");
      let prjCardBefore = cssRule.getRule(".prjc-column__right::before");

      // Texts animation
      gsap.set(char, { yPercent: -89 });
      gsap.set(heading, { autoAlpha: 1 });
      // gsap.set(headerImage, { opacity: 0 });
      gsap.set(headerImagePic, { scale: 1.3 });
      gsap.set(headerSubHeading, { yPercent: -85, opacity: 0 });
      gsap.set(prjHeaderBefore, { width: "0" });
      gsap.set(prjHeaderAfter, { width: "0" });
      gsap.set(prjCardsAfter, { height: "0" });
      gsap.set(projectsScrollDownArrow, { y: "-30", opacity: 0 });
      gsap.set(prjRowsAfter, { top: "120%" });
      // gsap.set(prjCardBefore, { opacity: 0 });
      gsap.set(projectCardName, { opacity: 0, y: "100" });
      // gsap.set(projectCardTools, { opacity: 0, y: "60" });

      tl.current = gsap
        .timeline()
        .from(topNav, { opacity: 0, y: -30, duration: 0.3, ease: "linear" })
        .to(
          char,
          {
            duration: 1,
            yPercent: 0,
            stagger: 0.05,
            ease: "expo.inOut",
          },
          ">0.2"
        )
        .to(charNoDot, {
          duration: 1.5,
          yPercent: 89,
          stagger: 0.1,
          ease: "expo.inOut",
        })
        .to(headingLine, { flexGrow: 1, duration: 1 }, "<-1")
        .to(headerSubHeading, { yPercent: 0, opacity: 1 }, "<0.9")
        .from(
          headerImage,
          {
            height: "160px",
            opacity: 0,
            duration: 1.5,
          },
          ">1.3"
        )
        .to(
          headerImagePic,
          {
            scale: 1,
            duration: 1.8,
          },
          "<0"
        )
        .to(projectsScrollDownArrow, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          yoyo: true,
          repeat: -1,
        });

      // Projects section
      const prjTl = gsap
        .timeline()
        .to(prjHeaderBefore, {
          width: "100%",
          duration: 1,
        })

        .to(
          prjHeaderAfter,
          {
            width: "100%",
            duration: 1,
          },
          "<"
        )
        .from(
          projectsScrollDownIndicator,
          {
            borderColor: "transparent",
            duration: 1,
          },
          "<"
        )
        .to(prjRowsAfter, { top: "100%", duration: 0.9, stagger: 0.1 }, "<")
        .to(prjCardsAfter, { height: "100%", duration: 1 }, "<")
        .to(projectCardName, { y: "0", opacity: 1, duration: 0.6 }, "<=+0.6");
      // .to(projectCardTools, { y: "0", opacity: 1, duration: 0.6 }, "<=+0.4");

      scrollTrigger.create({
        trigger: projectsSection,
        start: "top 60%",
        toggleActions: "play none none reverse",
        animation: prjTl,
        markers: true,
      });

      // Cursor
      // Cursor effect
      const cursor = document.querySelector(".cursor");
      const cursorEffect = document.querySelectorAll(".cursor-effect");
      let mouseX = 0;
      let mouseY = 0;

      gsap.to({}, 0.01, {
        repeat: -1,
        onRepeat: function () {
          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      });

      window.addEventListener("mousemove", function (e: any) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      cursorEffect.forEach((link) => {
        link.addEventListener("mouseleave", () => {
          cursor?.classList.remove("grow");
          cursor?.classList.remove("grow-small");
        });
        link.addEventListener("mousemove", () => {
          cursor?.classList.add("grow");
          if (link.classList.contains("small")) {
            cursor?.classList.remove("grow");
            cursor?.classList.add("grow-small");
          }
        });
      });

      // Footer animation
      gsap.from('[data-animate="footer-child"]', {
        opacity: 0,
        y: 50,
        ease: "linear",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '[data-animate="footer-section"]',
          // markers: true,
          start: "top 80%",
          end: "bottom 90%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
};
export default useDemoAnimation;
