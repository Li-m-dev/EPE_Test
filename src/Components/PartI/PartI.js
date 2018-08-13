import React, { Component } from "react";
import Input from "../Input/Input";

class PartI extends Component {
  constructor() {
    super();
    this.state = {
      idNum: "",
      address: "",
      llc: "",
      partner: "",
      entityType: "",
      retirementPlanChecked: false,
      profitBeginning: "",
      profitEnding: "",
      lossBeginning: "",
      lossEnding: "",
      capitalBeginning: "",
      capitalEnding: "",
      nonrecourse: "",
      financing: "",
      recourse: "",
      capitalAccount: "",
      capitalDuringYear: "",
      currentChange: "",
      currentChange2: "",
      capitalDuringYear2: "",
      taxBasisChecked: false,
      gaapChecked: false,
      sectionChecked: false,
      otherChecked: false,
      yesOrNo: ""
    };
  }

  handleSelected = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChecked = e => {
    console.log(e.target.value);
    let name = e.target.name;
    if (e.target.value === "false") {
      this.setState({ [name]: true });
    } else {
      this.setState({ [name]: false });
    }
  };

  handleInputChange = e => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="form-content">
          <div className="form_left">
            <div className="item">
              <div className="Full-Name">Partnership's identifying number</div>
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
              <div className="Fill">
                <Input
                  type={"text"}
                  name={"address"}
                  value={this.state.address}
                  handleChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="General-partner-or-L">
              <input
                type="radio"
                name="llc"
                value="General partner or LLC member-manager"
                onClick={this.handleSelected}
                className="Radio"
              />
              General partner or LLC member-manager
            </div>

            <div className="Limited-partner-or-o">
              <input
                type="radio"
                name="llc"
                onClick={this.handleSelected}
                value="Limited partner or other LLC member"
                className="Radio"
              />
              Limited partner or other LLC member
            </div>
            <div className="Domestic-partner">
              <input
                type="radio"
                name="partner"
                onClick={this.handleSelected}
                value="Domestic partner"
                className="Radio"
              />
              Domestic partner
            </div>
            <div className="Foreign-partner">
              {/* <label htmlFor="foreignPartnerChecked" /> */}
              <input
                type="radio"
                name="partner"
                onClick={this.handleSelected}
                value="Foreign partner"
                className="Radio"
              />
              Foreign partner
            </div>
            <div className="entity-box">
              <div className="Full-Name">
                What type of entity is this partner?
              </div>
              <Input
                type={"text"}
                name={"entityType"}
                value={this.state.entityType}
                handleChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="retirementPlanChecked"
                value={this.state.retirementPlanChecked}
                onClick={this.handleChecked}
              />
              <p className="If-this-partner-is-a">
                If this partner is a retirement plan (IRA/SEP/Keogh/etc.), check
                here
              </p>
            </div>
          </div>

          <div className="form-right">
            <p className="Partners-share-of-p">
              Partner's share of profit, loss, and capital
            </p>
            <div className="plc-box">
              <div className="plc-box-sub">
                <p>Beginning</p>
                <p>Ending</p>
              </div>
              <div className="plc-box-sub">
                <p>Profit</p>
                <span className="Fill">
                  <Input
                    type={"text"}
                    name={"profitBeginning"}
                    value={this.state.profitBeginning}
                    handleChange={this.handleInputChange}
                  />
                </span>
                <span className="percentage">%</span>
                <span className="Fill">
                  <Input
                    type={"text"}
                    name={"profitEnding"}
                    value={this.state.profitEnding}
                    handleChange={this.handleInputChange}
                  />
                </span>
                <span className="percentage">%</span>
              </div>
              <div className="plc-box-sub">
                <p>Loss</p>
                <span className="Fill">
                  <Input
                    type={"text"}
                    name={"lossBeginning"}
                    value={this.state.lossBeginning}
                    handleChange={this.handleInputChange}
                  />
                </span>
                <span className="percentage">%</span>
                <span className="Fill">
                  <Input
                    type={"text"}
                    name={"lossEnding"}
                    value={this.state.lossEnding}
                    handleChange={this.handleInputChange}
                  />
                </span>
                <span className="percentage">%</span>
              </div>
              <div className="plc-box-sub">
                <p>Capital</p>
                <span className="Fill">
                  <Input
                    type={"text"}
                    name={"capitalBeginning"}
                    value={this.state.capitalBeginning}
                    handleChange={this.handleInputChange}
                  />
                </span>
                <span className="percentage">%</span>
                <span className="Fill">
                  <Input
                    type={"text"}
                    name={"capitalEnding"}
                    value={this.state.capitalEnding}
                    handleChange={this.handleInputChange}
                  />
                </span>
                <span className="percentage">%</span>
              </div>
            </div>
            <div className="liability-box">
              <p className="Partners-share-of-l">
                Partner's share of liabilities at year end:
              </p>
              <div className="liability-box-sub">
                <p>Nonrecourse</p>
                <span className="Fill">
                  <h6 className="dollarSign">$</h6>
                  <Input
                    type={"text"}
                    name={"nonrecourse"}
                    value={this.state.nonrecourse}
                    handleChange={this.handleInputChange}
                  />
                </span>
              </div>
              <div className="liability-box-sub">
                <p>Qualified nonrecourse financing</p>
                <span className="Fill">
                  <h6 className="dollarSign">$</h6>
                  <Input
                    type={"text"}
                    name={"financing"}
                    value={this.state.financing}
                    handleChange={this.handleInputChange}
                  />
                </span>
              </div>
              <div className="liability-box-sub">
                <p>Recourse</p>
                <span className="Fill">
                  <h6 className="dollarSign">$</h6>
                  <Input
                    type={"text"}
                    name={"recourse"}
                    value={this.state.recourse}
                    handleChange={this.handleInputChange}
                  />
                </span>
              </div>
            </div>
            <div className="capital-box">
              <p>Partner's capital account analysis:</p>
              <div className="capital-box-sub">
                <p>Beginning capital account</p>
                <span className="Fill">
                  <h6 className="dollarSign">$</h6>
                  <Input
                    type={"text"}
                    name={"capitalAccount"}
                    value={this.state.capitalAccount}
                    handleChange={this.handleInputChange}
                  />
                </span>
              </div>
              <div className="capital-box-sub">
                <p>Capital contributed during the year</p>
                <span className="Fill">
                  <h6 className="dollarSign">$</h6>
                  <Input
                    type={"text"}
                    name={"capitalDuringYear"}
                    value={this.state.capitalDuringYear}
                    handleChange={this.handleInputChange}
                  />
                </span>
              </div>
              <div className="capital-box-sub">
                <p>Current year increase (decrease)</p>
                <span className="Fill">
                  <h6 className="dollarSign">$</h6>
                  <Input
                    type={"text"}
                    name={"currentChange"}
                    value={this.state.currentChange}
                    handleChange={this.handleInputChange}
                  />
                </span>
              </div>
              <div className="capital-box-sub">
                <p>Capital contributed during the year</p>
                <span className="Fill">
                  <h6 className="dollarSign">$</h6>
                  <Input
                    type={"text"}
                    name={"capitalDuringYear2"}
                    value={this.state.capitalDuringYear2}
                    handleChange={this.handleInputChange}
                  />
                </span>
              </div>
              <div className="capital-box-sub">
                <p>Current year increase (decrease)</p>
                <span className="Fill">
                  <h6 className="dollarSign">$</h6>
                  <Input
                    type={"text"}
                    name={"currentChange2"}
                    value={this.state.currentChange2}
                    handleChange={this.handleInputChange}
                  />
                </span>
              </div>
            </div>
            <div className="check-boxes">
              <div className="check-boxes-sub">
                <input
                  type="checkbox"
                  name="taxBasisChecked"
                  value={this.state.taxBasisChecked}
                  onClick={this.handleChecked}
                />
                <p>Tax basis</p>
              </div>
              <div className="check-boxes-sub">
                <input
                  type="checkbox"
                  name="gaapChecked"
                  value={this.state.gaapChecked}
                  onClick={this.handleChecked}
                />
                <p>GAAP</p>
              </div>
              <div className="check-boxes-sub">
                <input
                  type="checkbox"
                  name="sectionChecked"
                  value={this.state.sectionChecked}
                  onClick={this.handleChecked}
                />
                <p>Section 704(b) book</p>
              </div>
              <div className="check-boxes-sub">
                <input
                  type="checkbox"
                  name="otherChecked"
                  value={this.state.otherChecked}
                  onClick={this.handleChecked}
                />
                <p>Other</p>
              </div>
            </div>
            <div className="contribute-box">
              <p>
                Did the partner contribute property with a built-in gain or
                loss?
              </p>
              <div className="contribute-box-sub">
                <input
                  type="radio"
                  name="yesOrNo"
                  value="yes"
                  onClick={this.handleSelected}
                  className="Radio"
                />
                Yes
              </div>
              <div className="contribute-box-sub">
                <input
                  type="radio"
                  name="yesOrNo"
                  value="no"
                  onClick={this.handleSelected}
                  className="Radio"
                />
                No
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartI;
