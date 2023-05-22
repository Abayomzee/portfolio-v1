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
      className="prjc-column"
      // ref={colref}
    >
      <div className="prjc-column" data-column-no={col.col}>
        <div className="prjc-column-bottom">
          <div className="prjc-name-and-tools">
            <Typography
              as="h2"
              className={`hd-5 prjc-name cursor-effect prjc-name-${col.col}`}
              text={col.name}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
