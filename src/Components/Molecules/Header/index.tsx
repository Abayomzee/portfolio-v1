import React from "react";
import Typography from "Components/Atom/Typography";
import "./style.css";

interface TopNavProps {}
const Header: React.FC<TopNavProps> = () => {
  // Variables
  const frontTexts = "fkoht".split(""); //fkoht
  const frontTextsDataChar = ".r.n.".split(""); //front
  const endTexts = "ehd".split(""); // ehd
  const endTextsDataChar = ".n.".split(""); // end
  const developerTexts = "aevtlosez".split(""); //aevtloser
  const developerTextsDataChar = "d..e..p.r".split(""); //developer
  // const letters = "develoserabcdefghijklmnopqrstuvwxyz".split("");

  // const subHeaderText =
  //   `Hello 👋, My name is Abayomi. I am a collaborative and creative front-end engineer. I have over half a decade years of experience building interactive experience through web and technology`.split(
  //     "\n"
  //   );

  // Data to render
  return (
    <header className="hd" data-scroll>
      <div className="center">
        <div className="hd-wrapper">
          {/* Heading */}
          <div className="hd-heading-head">
            <Typography
              as="h6"
              className="hd-3 text-uppercase heading cursor-effect"
            >
              {frontTexts.map((text, index) => (
                <Typography
                  key={index}
                  as="span"
                  className="heading-char"
                  text={text}
                  dataCharacter={frontTextsDataChar[index]}
                />
              ))}
            </Typography>
            <div className="hd-heading-divder"></div>
            <Typography
              as="h6"
              className="hd-3 text-uppercase heading cursor-effect"
            >
              {endTexts.map((text, index) => (
                <Typography
                  key={index}
                  as="span"
                  className="heading-char"
                  text={text}
                  dataCharacter={endTextsDataChar[index]}
                />
              ))}
            </Typography>
          </div>
          <div className="hd-heading-down">
            <div>
              <Typography
                as="h6"
                className="hd-3 text-uppercase heading cursor-effect"
              >
                {developerTexts.map((text, index) => (
                  <Typography
                    key={index}
                    as="span"
                    className="heading-char"
                    text={text}
                    dataCharacter={developerTextsDataChar[index]}
                  />
                ))}
              </Typography>

              {/* Sub Heading */}
              <Typography
                as="h6"
                className="prg-1 hd-sub-heading-text mt-20 cursor-effect small"
              >
                Hello 👋, My name is Abayomi. I am a collaborative and creative
                front-end engineer. I have over half a decade years of
                experience building interactive experience through web and
                technology
              </Typography>
            </div>

            <div>
              <div className="hd-project-slider">
                <img
                  src="/assets/images/header-pic.webp"
                  alt="project"
                  className="hd-project-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
