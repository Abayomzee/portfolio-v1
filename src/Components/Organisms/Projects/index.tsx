import React from "react";
// import Typography from "Components/Atom/Typography";
import "./style.css";
import { ArrowIcon } from "Components/Atom/SvgIcons";
import ProjectCard from "Components/Molecules/ProjectCard";

interface TopNavProps {}
const Projects: React.FC<TopNavProps> = () => {
  // Variables
  const data = [
    {
      name: "Stevia",
      stacks: "REACT JS, FRAMER MOTION",
      col: "1",
      url: "https://www.steviapro.com",
      description: "E-Learning platform",
    },
    {
      name: "Dapp exchange",
      stacks: "HTML, CSS, JAVASCRIPT",
      col: "2",
      url: "https://dapp-exchange.on.fleek.co/",
      description: "Decentralized exchange",
    },
    {
      name: "Chess",
      stacks: "REACT JS",
      col: "3",
      url: "https://montech-chess.vercel.app/",
      description: "Web3 Chess game",
    },
    {
      name: "NodCredit",
      stacks: "HTML, CSS, JAVASCRIPT",
      col: "4",
      url: "https://nodcredit.com/",
      description: "Credit app",
    },

    {
      name: "Qstore",
      stacks: "REACT JS, FRAMER MOTION",
      col: "5",
      url: "https://qui-bookstore.netlify.app/",
      description: "Online bookstore",
    },
    {
      name: "Metacare",
      stacks: "REACT JS, FRAMER MOTION",
      col: "6",
      url: "https://meta-care-app.netlify.app/",
      description: "Dashboard template",
    },
    {
      name: "EduLearn",
      stacks: "HTML, CSS, JAVASCRIPT",
      col: "7",
      url: "https://app.steviapro.com/",
      description: "E-Learning app",
    },
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
