import React from "react";
import Typography from "Components/Atom/Typography";
import "./style.css";

interface ProjectCardProps {
  col: any;
}
const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  // Props
  const { col } = props;

  // Data to render
  return (
    <a href="#" target="_blank" className="prjc-column">
      {/* <div className="prjc-column"> */}
        <div></div>
        <div className="prjc-column__right" data-column-no={col.col}>
          <div className="prjc-column__top">
            {/* <Typography as="h2" className="hd-5 text-right" text="Stevia" /> */}
          </div>
          <div className="prjc-column__right-bottom">
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
                className="hd-5 text-right prjc-name cursor-effect"
                text={col.name}
              />
            </div>
          </div>
        </div>
      {/* </div> */}
    </a>
  );
};

export default ProjectCard;
