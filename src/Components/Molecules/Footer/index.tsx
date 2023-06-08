import React from "react";
import Typography from "Components/Atom/Typography";
import "./style.css";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  // Data to render
  return (
    <footer
      className="foo-wrapper"
      id="contact"
      data-animate="footer-section"
      data-scroll
    >
      <Typography
        as="p"
        className="prg-2 text-center max-width-480 mx-auto"
        text={`I’m currently available to new opportunities. Feel free to reach out`}
        dataAnimate="footer-child"
      />

      <a
        href="mailto:Okegbenroabayo@gmail.com"
        rel="noreferrer"
        className="my-email display-block mt-40 mb-20"
        data-animate="footer-child"
      >
        <Typography as="h2" className="hd-6 text-center">
          Okegbenroabayo@gmail.com
        </Typography>
      </a>

      <div className="socials mt-80" data-animate="footer-child">
        <Typography
          as="p"
          className="prg-4 text-center"
          text={`Socials`}
          // dataAnimate="footer-child"
        />
        <div className="social-links">
          {/* <Typography
            as="p"
            className="prg-3 social-link"
            text={`LINKEDIN`}
            // dataAnimate="footer-child"
          /> */}
          <a
            href="https://www.linkedin.com/in/okegbenro-abayomi-554952b3/"
            rel="noreferrer"
            target={"_blank"}
            className="prg-3 social-link"
          >
            LINKEDIN
          </a>
          {/* <Typography
            as="p"
            className="prg-3 social-link"
            text={`GITHUB`}
            // dataAnimate="footer-child"
          /> */}
          <a
            href="https://github.com/Abayomzee"
            rel="noreferrer"
            target={"_blank"}
            className="prg-3 social-link"
          >
            Github
          </a>
          {/* <Typography
            as="p"
            className="prg-3 social-link"
            text={`TWITTER`}
            // dataAnimate="footer-child"
          /> */}
          <a
            href="https://twitter.com/Abayomzee"
            rel="noreferrer"
            target={"_blank"}
            className="prg-3 social-link"
          >
            Twitter
          </a>
          {/* <Typography
            as="p"
            className="prg-3 social-link"
            text={`INSTAGRAM`}
            // dataAnimate="footer-child"
          /> */}
          <a
            href="https://www.instagram.com/abayomi.dev/"
            rel="noreferrer"
            target={"_blank"}
            className="prg-3 social-link"
          >
            Instagram
          </a>
        </div>
      </div>

      <Typography
        as="p"
        className="prg-5 text-center mt-20 cursor-effect small"
        dataAnimate="footer-child"
      >
        Designed and Developed by <span className="color-white">ME</span>
      </Typography>
    </footer>
  );
};

export default Footer;
