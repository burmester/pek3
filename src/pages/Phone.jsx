import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Context from "../context/defaultContext";

import Header from "../components/phone/Header";
import Activate from "./phone/activate/Activate";
import Code from "./phone/activate/Code";
import Qr from "./phone/activate/Qr";
import Passcode from "./phone/activate/Passcode";
import Receipt from "./phone/activate/Receipt";
import Start from "./phone/Start";

export default class extends React.Component {
  static contextType = Context;
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/phone" component={Start} />
          <Route path="/phone/activate" component={Activate} />
          <Route path="/phone/code" component={Code} />
          <Route path="/phone/qr" component={Qr} />
          <Route path="/phone/passcode" component={Passcode} />
          <Route path="/phone/receipt" component={Receipt} />
        </Switch>
      </Fragment>
    );
  }
}
