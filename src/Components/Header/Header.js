import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header_box">
        <div className="link_box">
          <Link to="/">
            <div className="Rectangle" />
            <div>Part I</div>
          </Link>
          <Link to="/part2">
            <div className="Rectangle" />
            <div>Part II</div>
          </Link>
          <Link to="/part3">
            <div className="Rectangle" />
            <div>Part III</div>
          </Link>
        </div>
        <button>Continue</button>
      </div>
    );
  }
}

export default Header;
