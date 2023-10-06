import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => {

  return (
    <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Header  />
        </Suspense>

      <div className="">Product page Content.</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
