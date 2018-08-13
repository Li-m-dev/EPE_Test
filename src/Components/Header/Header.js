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
        {/* <button>Continue</button> */}

        <div className="section_header">
          <div className="section_header_sub">
            <h3 className="Schedule-K-1">Schedule K-1</h3>
            <span className="Form-1065">(Form 1065)</span>
          </div>
          <div className="section_header_sub">
            <h3 className="Partners-Share-of-I">
              Partner's Share of Income, Deductions, Credits, etc.
            </h3>
            <span className="Part-II-Information">
              Part II :Information About the Partner
            </span>
          </div>
          <div className="year section_header_sub">
            <span className="layer">20</span>
            <span className="layer2">17</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
