import React, { useLayoutEffect, useRef } from "react";
import Typography from "Components/Atom/Typography";
import gsap from "gsap";
import "./style.css";

interface ProjectCardProps {
  col: any;
}
const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  // Props
  const { col } = props;

  // Data to render
  return (
    <a
      href={col.url ? col.url : "#"}
      rel="noreferrer"
      target="_blank"
      className="prjc-column"
      // ref={colref}
    >
      {/* <div className="prjc-column"> */}
      {/* <div></div> */}
      <div className="prjc-column" data-column-no={col.col}>
        {/* <div className="prjc-column__top"> */}
        {/* <Typography as="h2" className="hd-5 text-right" text="Stevia" /> */}
        {/* </div> */}
        <div className="prjc-column-bottom">
          <div className="prjc-name-and-tools">
            {/* <div className="prjc-tools">
                {col.stacks.split(",").map((stack: any) => (
                  <Typography
                    as="span"
                    className={`prg-5 text-right text-right prjc-tool cursor-effect small`}
                    text={stack}
                  />
                ))}
              </div> */}
            <Typography
              as="h2"
              className={`hd-5 text-right prjc-name cursor-effect prjc-name-${col.col}`}
              text={col.name}
            />
            {/* <Typography
              as="h2"
              className="hd-5 text-right prjc-name-2 cursor-effect"
              text={col.name}
            /> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </a>
  );
};

export default ProjectCard;
