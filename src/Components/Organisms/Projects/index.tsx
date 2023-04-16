import React from "react";
// import Typography from "Components/Atom/Typography";
import "./style.css";
import { ArrowIcon } from "Components/Atom/SvgIcons";
import ProjectCard from "Components/Molecules/ProjectCard";

interface TopNavProps {}
const Projects: React.FC<TopNavProps> = () => {
  // Variable
  const data = [
    { name: "Stevia", stacks: "REACT JS, FRAMER MOTION", col: "1" },
    { name: "NodCredit", stacks: "HTML, CSS, JAVASCRIPT", col: "2" },
    { name: "Todo", stacks: "REACT JS", col: "3" },
    { name: "Metacare", stacks: "REACT JS, FRAMER MOTION", col: "4" },
    { name: "Qstore", stacks: "REACT JS, FRAMER MOTION", col: "5" },
    { name: "NodTransfer", stacks: "HTML, CSS, JAVASCRIPT", col: "6" },
    { name: "Afriglobal", stacks: "HTML, CSS, JAVASCRIPT", col: "7" },
  ];

  // Data to render
  return (
    <section className="prj" data-scroll>
      <div className="center">
        <div className="prj-wrapper-header">
          {/* Nav */}
          <div className="prj-nav">
            <div className="prj-scroll-indicator">
              <ArrowIcon className="prj-scroll-arrow" />
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="center">
        <div className="prj-row">
          {data.slice(0, 2).map((col) => (
            <ProjectCard key={col.col} col={col} />
          ))}
        </div>
        <div className="prj-row">
          {data.slice(2, 5).map((col) => (
            <ProjectCard key={col.col} col={col} />
          ))}
        </div>
        <div className="prj-row">
          {data.slice(5, 7).map((col) => (
            <ProjectCard key={col.col} col={col} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
