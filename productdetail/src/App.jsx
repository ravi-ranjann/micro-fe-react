import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import SafeComponent from "./SafeComponent";
const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className="container">
      {showHeader && (
        // <Suspense fallback={<div>Loading...</div>}>
          <SafeComponent>
          <Header  />
          </SafeComponent>
         
        // </Suspense>
      )}
      <button className="" onClick={() => setShowHeader(!showHeader)} >Show Header</button>

      <div className="">Product page Content.</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
