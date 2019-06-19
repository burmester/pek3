import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Context from "../context/defaultContext";

import Code from "./webb/activate/Code";
import Qr from "./webb/activate/Qr";
import Activate from "./webb/activate/Activate";
import UserId from "./webb/activate/UserId";
import Wait from "./webb/activate/Wait";
import Receipt from "./webb/activate/Receipt";



export default class extends React.Component {
  static contextType = Context;
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/webb/activate" component={Activate} />
          <Route path="/webb/code" component={Code} />
          <Route path="/webb/qr" component={Qr} />
          <Route path="/webb/userId" component={UserId} />
          <Route path="/webb/wait" component={Wait} />
          <Route path="/webb/receipt" component={Receipt} />
        </Switch>
      </Fragment>
    );
  }
}
