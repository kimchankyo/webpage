import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Research from "./components/research/Research";


class Website extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="webpage">
        <HashRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/research" element={<Research/>} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default Website;