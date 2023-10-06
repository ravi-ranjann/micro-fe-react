import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <div className="container">
    <Header app={{name: " Home"}} />
    <div className="">Home page Content.</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
