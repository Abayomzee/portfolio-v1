import React from "react";
import Preloader from "Components/Atom/PreLoader";
import Home from "Components/Pages/Home";

function App() {
  return (
    <>
      <Preloader />
      <div className="cursor"></div>
      <div className="scroll-handler">
        <Home />
      </div>
    </>
  );
}

export default App;
