import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
class PartII extends Component {
  constructor() {
    super();
    this.state = {
      businessIncome: "",
      realEstateIncome: "",
      rentalIncome: "",
      payments: "",
      interestIncome: "",
      ordinaryDividends: "",
      qualifiedDividends: "",
      royalties: "",
      shotCapitalGain: "",
      longCapitalGain: "",
      collectibleGain: "",
      section1250Gain: "",
      section1231Gain: "",
      otherIncome1: "",
      otherIncome2: "",
      otherIncome3: "",
      section179: "",
      otherDeduction1: "",
      otherDeduction2: "",
      otherDeduction3: "",
      selfEarning1: "",
      selfEarning2: "",
      selfEarning3: "",
      credits1: "",
      credits2: "",
      credits3: ""
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
        <Link to="/part3">
          <button className="ctrl-btn">Continue</button>
        </Link>
        <div className="part2-content">
          <div className="part2-left">
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>1</h1>
              </div>
              <div className="part2-items-sub">
                <p>Ordinary business income (loss)</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"businessIncome"}
                    value={this.state.businessIncome}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>2</h1>
              </div>
              <div className="part2-items-sub">
                <p>Net rental real estate income(loss)</p>

                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"realEstateIncome"}
                    value={this.state.realEstateIncome}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>3</h1>
              </div>
              <div className="part2-items-sub">
                <p>Other net rental income (loss)</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"rentalIncome"}
                    value={this.state.rentalIncome}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>4</h1>
              </div>
              <div className="part2-items-sub">
                <p>Guaranteed payments</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"payments"}
                    value={this.state.payments}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>5</h1>
              </div>
              <div className="part2-items-sub">
                <p>Interest income</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"interestIncome"}
                    value={this.state.interestIncome}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>6a</h1>
              </div>
              <div className="part2-items-sub">
                <p>Ordinary dividends</p>

                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"ordinaryDividends"}
                    value={this.state.ordinaryDividends}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>6b</h1>
              </div>
              <div className="part2-items-sub">
                <p>Qualified dividends</p>

                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"qualifiedDividends"}
                    value={this.state.qualifiedDividends}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>7</h1>
              </div>
              <div className="part2-items-sub">
                <p>Royalties</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"royalties"}
                    value={this.state.royalties}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="part2-center">
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>8</h1>
              </div>
              <div className="part2-items-sub">
                <p>Net short-term capital gain</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"shortCapitalGain"}
                    value={this.state.shortCapitalGain}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>9a</h1>
              </div>
              <div className="part2-items-sub">
                <p>Net long-term capital gain (loss)</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"longCapitalGain"}
                    value={this.state.longCapitalGain}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>9b</h1>
              </div>
              <div className="part2-items-sub">
                <p>Collectibles (28%) gain (loss)</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"collectibleGain"}
                    value={this.state.collectibleGain}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>9c</h1>
              </div>
              <div className="part2-items-sub">
                <p>Unrecaptured section 1250 gain</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"businessIncome"}
                    value={this.state.businessIncome}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>10</h1>
              </div>
              <div className="part2-items-sub">
                <p>Net section 1231 gain (loss)</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"section1231Gain"}
                    value={this.state.section1231Gain}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number" id="input-11">
                <h1>11</h1>
              </div>
              <div className="part2-items-sub">
                <p>Other income (loss)</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherIncome1"}
                    value={this.state.otherIncome1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherIncome2"}
                    value={this.state.otherIncome2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherIncome3"}
                    value={this.state.otherIncome3}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="part-right">
            <div className="part2-items">
              <div className="part2-items-number">
                <h1>12</h1>
              </div>
              <div className="part2-items-sub">
                <p>Section 179 deduction</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"section179"}
                    value={this.state.section179}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number" id="input-11">
                <h1>13</h1>
              </div>
              <div className="part2-items-sub">
                <p>Other Deduction</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherDeduction1"}
                    value={this.state.otherDeduction1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherDeduction2"}
                    value={this.state.otherDeduction2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"otherDeduction3"}
                    value={this.state.otherDeduction3}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number" id="input-11">
                <h1>14</h1>
              </div>
              <div className="part2-items-sub">
                <p>Self-employment earnings (loss)</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"selfEarning1"}
                    value={this.state.selfEarning1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"selfEarning2"}
                    value={this.state.selfEarning2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"selfEarning3"}
                    value={this.state.selfEarning3}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="part2-items">
              <div className="part2-items-number" id="input-11">
                <h1>15</h1>
              </div>
              <div className="part2-items-sub">
                <p>Credits</p>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"credits1"}
                    value={this.state.credits1}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"credits2"}
                    value={this.state.credits2}
                    handleChange={this.handleInputChange}
                  />
                </div>
                <div className="Fill">
                  <Input
                    type={"text"}
                    name={"credits3"}
                    value={this.state.credits3}
                    handleChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PartII;
