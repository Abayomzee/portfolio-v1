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
      description: "A Skill Learning platform",
    },
    {
      name: "Dapp exchange",
      stacks: "HTML, CSS, JAVASCRIPT",
      col: "2",
      url: "https://dapp-exchange.on.fleek.co/",
      description: "A crypto exchange",
    },
    {
      name: "Chess",
      stacks: "REACT JS",
      col: "3",
      url: "https://montech-chess.vercel.app/",
      description: "A web3 chess game",
    },
    {
      name: "Metacare",
      stacks: "REACT JS, FRAMER MOTION",
      col: "4",
      url: "https://meta-care-app.netlify.app/",
      description: "A simple analytics template",
    },
    {
      name: "Qstore",
      stacks: "REACT JS, FRAMER MOTION",
      col: "5",
      url: "https://qui-bookstore.netlify.app/",
      description: "Online bookstore app",
    },
    {
      name: "EduLearn",
      stacks: "HTML, CSS, JAVASCRIPT",
      col: "6",
      url: "https://app.steviapro.com/",
      description: "E-Learning app",
    },
    {
      name: "NodCredit",
      stacks: "HTML, CSS, JAVASCRIPT",
      col: "7",
      url: "https://nodcredit.com/",
      description: "A Quick Credit borrowing app",
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
