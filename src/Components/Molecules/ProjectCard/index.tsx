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
    <a
      href={col.url ? col.url : "#"}
      rel="noreferrer"
      target="_blank"
      className={`prjc-column`}
      // ref={colref} 
    >
      <div
        className={`prjc-column`}
        id={`prjc-column-${col.col}`}
        data-column-no={col.col}
      >
        <div className="prjc-column-bottom">
          <div className="prjc-name-and-tools">
            <Typography
              as="span"
              className={`prjc-description cursor-effect small`}
              id={`prjc-description-${col.col}`}
              text={col.description}
            />
            <Typography
              as="h2"
              className={`hd-5 prjc-name cursor-effect prjc-name-${col.col}`}
              id={`prjc-name-${col.col}`}
              text={col.name}
            />
          </div>
        </div>
        <div className="mobile-bottom-line"></div>
      </div>
    </a>
  );
};

export default ProjectCard;
