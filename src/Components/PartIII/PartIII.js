import React, { Component, Fragment } from "react";
import Input from "../Input/Input";

class PartIII extends Component {
  constructor() {
    super();
    this.state = {
      foreignTransactions1: "",
      foreignTransactions2: "",
      foreignTransactions3: "",
      foreignTransactions4: "",
      foreignTransactions5: "",
      foreignTransactions6: "",
      foreignTransactions7: "",
      atmItems1: "",
      atmItems2: "",
      atmItems3: "",
      nondeductibleExpenses1: "",
      nondeductibleExpenses2: "",
      nondeductibleExpenses3: "",
      distributions1: "",
      distributions2: "",
      distributions3: "",
      otherInfo1: "",
      otherInfo2: "",
      otherInfo3: ""
    };
  }

  handleInputChange = e => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <button className="ctrl-btn"> Submit </button>
        <div className="part3-content">
          <div className="part3-left">
            <div className="part3-items">
              <div className="part3-items-number" id="input-16">
                <h1>16</h1>
              </div>
              <div className="part3-items-sub">
                <p>Ordinary business income (loss)</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"foreignTransactions1"}
                    value={this.state.foreignTransactions1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"foreignTransactions2"}
                    value={this.state.foreignTransactions2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"foreignTransactions3"}
                    value={this.state.foreignTransactions3}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"foreignTransactions4"}
                    value={this.state.foreignTransactions4}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"foreignTransactions5"}
                    value={this.state.foreignTransactions5}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"foreignTransactions6"}
                    value={this.state.foreignTransactions6}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"foreignTransactions7"}
                    value={this.state.foreignTransactions7}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="part3-center">
            <div className="part3-items">
              <div className="part3-items-number">
                <h1>17</h1>
              </div>
              <div className="part3-items-sub">
                <p>Alternative minimum tax (ATM) items</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"atmItems1"}
                    value={this.state.atmItems1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"atmItems2"}
                    value={this.state.atmItems2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"atmItems3"}
                    value={this.state.atmItems3}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part3-items">
              <div className="part3-items-number">
                <h1>18</h1>
              </div>
              <div className="part3-items-sub">
                <p>Tax-exempt income and nondeductible expenses </p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"nondeductibleExpenses1"}
                    value={this.state.nondeductibleExpenses1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"nondeductibleExpenses2"}
                    value={this.state.nondeductibleExpenses2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"nondeductibleExpenses3"}
                    value={this.state.nondeductibleExpenses3}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="part3-right">
            <div className="part3-items">
              <div className="part3-items-number">
                <h1>19</h1>
              </div>
              <div className="part3-items-sub">
                <p>Distributions</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"distributions1"}
                    value={this.state.distributions1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"distributions2"}
                    value={this.state.distributions2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"distributions3"}
                    value={this.state.distributions3}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part3-items">
              <div className="part3-items-number">
                <h1>20</h1>
              </div>
              <div className="part3-items-sub">
                <p>Other Information </p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherInfo1"}
                    value={this.state.otherInfo1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherInfo2"}
                    value={this.state.otherInfo2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherInfo3"}
                    value={this.state.otherInfo3}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="part3-bottom">
          Statement from: https://www.irs.gov/pub/irs-pdf/f1065sk1.pdf This list
          identifies the codes used on Schedule K-1 for all partners and
          provides summarized reporting information for partners who file Form
          1040. For detailed reporting and filing information, see the separate
          Partner’s Instructions for Schedule K-1 and the instructions for your
          income tax return. 1. Ordinary business income (loss). Determine
          whether the income (loss) is passive or nonpassive and enter on your
          return as follows. Report on Passive loss See the Partner’s
          Instructions Passive income Schedule E, line 28, column (g) Nonpassive
          loss See the Partner's Instructions Nonpassive income Schedule E, line
          28, column (j) 2. Net rental real estate income (loss) See the
          Partner’s Instructions 3. Other net rental income (loss) Net income
          Schedule E, line 28, column (g) Net loss See the Partner’s
          Instructions
        </div> */}
      </Fragment>
    );
  }
}

export default PartIII;
