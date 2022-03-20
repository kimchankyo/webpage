import React from "react";
import "./Header.css";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="site-header">
        <div className="site-title-container">
          <div className="site-title">
            &gt; Chris Chankyo Kim's Personal Website <div className="site-header-terminal-cursor"/>
          </div>
        </div>
        <div className="site-toolbar">
          <button className="site-toolbar-button">HOME</button>
          <button className="site-toolbar-button">RESEARCH</button>
        </div>
      </div>
    );
  }
}

export default Header;