import React from "react";

import { Link } from "react-router-dom";
import App from "./App";

class Website extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Website
        <Link to="/webpage/s">Click This To Change</Link>
      </div>
    );
  }
}

export default Website;