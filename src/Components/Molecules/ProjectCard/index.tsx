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
    <div className="prjc-column">
      <div></div>
      <div className="prjc-column__right" data-column-no={col.col}>
        <div className="prjc-column__top">
          {/* <Typography as="h2" className="hd-5 text-right" text="Stevia" /> */}
        </div>
        <div className="prjc-column__right-bottom">
          <Typography as="h2" className="hd-5 text-right prjc-name" text={col.name} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
