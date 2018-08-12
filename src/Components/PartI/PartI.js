import React, { Component } from "react";
import Input from "../Input/Input";

class PartI extends Component {
  constructor() {
    super();
    this.state = {
      idNum: "",
      address: ""
    };
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="section_header">
          <div>
            <h3 className="Schedule-K-1">Schedule K-1</h3>
            <span className="Form-1065">(Form 1065)</span>
          </div>
          <div>
            <h3 className="Partners-Share-of-I">
              Partner's Share of Income, Deductions, Credits, etc.
            </h3>
            <span className="Part-II-Information">
              Part II :Information About the Partner
            </span>
          </div>
          <div className="year">
            <span>20</span>
            17
          </div>
        </div>

        <div className="form_left">
          <div className="item">
            <div className="Full-Name">
              Partnership's employer identification number
            </div>
            <Input
              type={"text"}
              name={"idNum"}
              value={this.state.idNum}
              handleChange={this.handleInputChange}
            />
          </div>
          <div className="item">
            <div className="Full-Name">
              Partnership's name, address, city, state, and ZIP code
            </div>
            <Input
              type={"text"}
              name={"address"}
              value={this.state.address}
              handleChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PartI;
