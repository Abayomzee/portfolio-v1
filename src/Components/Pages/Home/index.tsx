import React from "react";
import TopNav from "Components/Molecules/TopNav";
import Header from "Components/Molecules/Header";
import Projects from "Components/Organisms/Projects";
import Footer from "Components/Molecules/Footer";
import useDemoAnimation from "Utils/Hooks/useDemoAnimation";
import "./style.css";

interface Props {}
const Home: React.FC<Props> = () => {
  //   Hooks
  useDemoAnimation();

  //   Data to render
  return (
    <>
      <main className="prrr">
        <main>
          <TopNav />
          <Header />
          <Projects />
          <Footer />
        </main>
      </main>
    </>
  );
};

export default Home;
