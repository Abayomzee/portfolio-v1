import React from "react";
import TopNav from "Components/Molecules/TopNav";
import Header from "Components/Molecules/Header";
import Projects from "Components/Organisms/Projects";
import Footer from "Components/Molecules/Footer";
import useDemoAnimation from "Utils/Hooks/useDemoAnimation";
import Preloader from "Components/Atom/PreLoader";
import "./style.css";

interface Props {}
const Home: React.FC<Props> = () => {
  // Refs
  // const app = useRef<HTMLElement>(null);
  // const scrollRef = React.useRef<any>(null);

  //   Hooks
  useDemoAnimation();

  //   Data to render
  return (
    <>
      <Preloader />
      <main>
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
