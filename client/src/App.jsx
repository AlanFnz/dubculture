import React from "react";
// import logo from "./logo.svg";
import { links, dubfree } from "./data/data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Linktree } from "./components/linktree/Linktree";
import { DubfreeForm } from "./components/dubfreeForm/DubfreeForm";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App container">
        <div className="container">
          <Header />
        </div>
        <Route exact path="/">
          <Linktree links={links} />
        </Route>
        <Route path="/dubfree">
          <DubfreeForm dubfree={dubfree} />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
