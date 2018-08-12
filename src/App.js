import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Header from "./Components/Header/Header";

import "./scss/App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="Portlet">
            <Header />
            {routes}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
