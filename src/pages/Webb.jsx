import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Context from "../context/defaultContext";

import Code from "./webb/activate/Code";
import Qr from "./webb/activate/Qr";
import Activate from "./webb/activate/Activate";

export default class extends React.Component {
  static contextType = Context;
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/webb/activate" component={Activate} />
          <Route path="/webb/code" component={Code} />
          <Route path="/webb/qr" component={Qr} />
        </Switch>
      </Fragment>
    );
  }
}
