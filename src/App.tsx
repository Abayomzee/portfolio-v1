import React, { Suspense } from "react";

const Home = React.lazy(() => import("Components/Pages/Home"));

function App() {
  return (
    <>
      <div className="cursor"></div>
      <Suspense fallback="Loading">
        <Home />
      </Suspense>
    </>
  );
}

export default App;
