import PageLoader from "Components/Atom/PageLoader";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("Components/Pages/Home"));

function App() {
  return (
    <>
      <div className="cursor"></div>
      <div className="scroll-handler">
        <Suspense fallback={<PageLoader />}>
          <Home />
        </Suspense>
      </div>
    </>
  );
}

export default App;
