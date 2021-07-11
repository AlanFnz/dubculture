import React from "react";
// import logo from "./logo.svg";
import { links } from "./data/links";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Linktree } from "./components/linktree/Linktree";
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
