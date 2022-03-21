import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "> Chris Chankyo Kim's Personal Website"
    };
  }

  render() {
    return (
      <div className="site-header">
        <div className="site-title-container">
          <div className="site-title">
            {this.state.title} <div className="site-header-terminal-cursor"/>
          </div>
        </div>
        <div className="site-toolbar">
          <Link to="/" className="site-toolbar-button">HOME</Link>
          <Link to="/research" className="site-toolbar-button">RESEARCH</Link>
          <Link to="/projects" className="site-toolbar-button">PROJECTS</Link>
          <Link to="/resume" id="site-toolbar-last-button" className="site-toolbar-button">RESUME/CV</Link>
        </div>
      </div>
    );
  }
}

export default Header;