import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import cssRule from "gsap/CSSRulePlugin";
// import scrollSmoother from "gsap/ScrollSmoother";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(scrollTrigger, cssRule);

const useDemoAnimation = () => {
  // Refs
  let tl = useRef();
  let prjTl = useRef();
  let prjcTl = useRef();

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
  // const projectsSectionRows = ".prj-row";
  // const projectsCards = ".prjc-column";
  const projectsScrollDownIndicator = ".prj-scroll-indicator";
  const projectsScrollDownArrow = ".prj-scroll-arrow";
  // const projectCardName = ".prjc-name-and-tools";
  // const projectCardName = ".prjc-name";
  // const projectCardTools = ".prjc-tools";

  // Effects
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Animation
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".scroll-handler"),
        smooth: true,
        multiplier: 0.7,
        // inertia: 0.3,
        mobile: {
          smooth: true,
          multiplier: 0.4,
        },
        tablet: {
          smooth: true,
          breakpoint: 0,
          multiplier: 0.4,
        },
      });

      locoScroll.on("scroll", scrollTrigger.update);

      scrollTrigger.scrollerProxy(".scroll-handler", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector(".scroll-handler").style.transform
          ? "transform"
          : "fixed",
      });
      // Scroll Animation

      let prjHeaderBefore = cssRule.getRule(".prj-wrapper-header::before");
      let prjHeaderAfter = cssRule.getRule(".prj-wrapper-header::after");
      let prjCardsAfter = cssRule.getRule(
        ".prjc-column:not(:last-child)::after"
      );
      let prjRowsAfter = cssRule.getRule(".prj-row::after");
      // let prjcnameAfter = cssRule.getRule(".prjc-name::after");
      // let prjCardBefore = cssRule.getRule(".prjc-column__right::before");

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
      // gsap.set(prjcnameAfter, { bottom: "80%", opacity: 0 });
      // gsap.set(projectCardName, { opacity: 0, y: "100" });
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
      prjTl.current = gsap
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
        .to(prjCardsAfter, { height: "100%", duration: 1 }, "<");

      // .to(projectCardTools, { y: "0", opacity: 1, duration: 0.6 }, "<=+0.4");

      scrollTrigger.create({
        trigger: projectsSection,
        start: "top 60%",
        toggleActions: "play none none reverse",
        animation: prjTl.current,
        markers: false,
        scroller: ".scroll-handler",
      });

      // prjcTl.current = gsap
      //   .timeline()
      //   .to(projectCardName, { y: "0", opacity: 1, duration: 0.6 }, "<=+0.6")
      //   .to(prjcnameAfter, { bottom: "105%", opacity: 1, duration: 0.6 });
      // scrollTrigger.create({
      //   trigger: projectsCards,
      //   start: "top 60%",
      //   toggleActions: "restart none none reverse",
      //   animation: prjcTl.current,
      //   markers: false,
      //   scroller: ".scroll-handler",
      // });

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

      window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      window.addEventListener("scroll", function (e) {
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
      // Cursor effect ----------------------------------------

      // Project cards ----------------------------------------
      const cards = document.querySelectorAll("div.prjc-column");
      cards.forEach((card, index) => {
        const cc = card.querySelector(".prjc-name");
        const cccAfter = card.querySelector(`.mobile-bottom-line`);
        const ccAfter = card.querySelector(`#prjc-description-${index + 1}`);

        gsap.set(cccAfter, {
          bottom: "-10px",
          opacity: 0,
        });
        gsap.set(cc, { opacity: 0, y: "100" });
        gsap.set(ccAfter, { y: "10px", opacity: 0 });

        // Entrance anim
        prjcTl.current = gsap
          .timeline()
          .to(cc, { y: "0", opacity: 1, duration: 0.6 })
          .to(cccAfter, { bottom: "0", opacity: 1, duration: 0.6 }, "<0.3")
          .to(ccAfter, { y: "0", opacity: 1, duration: 0.6 }, "<0.3");

        scrollTrigger.create({
          trigger: card,
          start: "top 70%",
          toggleActions: "restart none none reverse",
          animation: prjcTl.current,
          markers: false,
          scroller: ".scroll-handler",
        });

        // Hover anim
        const tl = gsap.timeline({ paused: true });
        tl.to(cc, {
          duration: 0.7,
          backgroundImage:
            "linear-gradient( to top, var(--bottom) 0%, var(--bottom) 100%, var(--top) 100%)",
        });

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });

      // Project cards end --------------------------------------

      // Footer animation
      gsap.from('[data-animate="footer-child"]', {
        opacity: 0,
        y: 50,
        ease: "power.in(1)",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '[data-animate="footer-section"]',
          markers: false,
          start: "top 75%",
          end: "bottom 90%",
          toggleActions: "restart none none reverse",
          scroller: ".scroll-handler",
        },
      });
      // Footer animation ------------------------------------

      scrollTrigger.addEventListener("refresh", () => locoScroll.update());
      scrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
};
export default useDemoAnimation;
