import React from "react";
// import logo from "./logo.svg";
import { links } from "./data/links";
import { Linktree } from "./components/linktree/Linktree";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App container">
      <div className="container">
        <Header />
      </div>
      <Linktree links={links} />
      <Footer />
    </div>
  );
}

export default App;
