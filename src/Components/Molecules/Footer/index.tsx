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
      <Typography
        as="h2"
        className="hd-6 text-center mt-40 my-email"
        text={`Okegbenroabayo@gmail.com`}
        dataAnimate="footer-child"
      />

      <div className="socials mt-80">
        <Typography
          as="p"
          className="prg-4 text-center"
          text={`Socials`}
          dataAnimate="footer-child"
        />
        <div className="social-links">
          <Typography
            as="p"
            className="prg-3 social-link"
            text={`LINKEDIN`}
            dataAnimate="footer-child"
          />
          <Typography
            as="p"
            className="prg-3 social-link"
            text={`GITHUB`}
            dataAnimate="footer-child"
          />
          <Typography
            as="p"
            className="prg-3 social-link"
            text={`TWITTER`}
            dataAnimate="footer-child"
          />
          <Typography
            as="p"
            className="prg-3 social-link"
            text={`INSTAGRAM`}
            dataAnimate="footer-child"
          />
        </div>
      </div>

      <Typography
        as="p"
        className="prg-5 text-center mt-20"
        dataAnimate="footer-child"
      >
        Designed and Developed by <span className="color-white">ME</span>
      </Typography>
    </footer>
  );
};

export default Footer;
