import React, { Suspense } from "react";
import Preloader from "Components/Atom/PreLoader";
import Home from "Components/Pages/Home";

function App() {
  return (
    <>
      <div className="cursor"></div>
      <div className="scroll-handler">
        {/* <Suspense fallback={<Preloader />}> */}
          <Home />
        {/* </Suspense> */}
      </div>
    </>
  );
}

export default App;
