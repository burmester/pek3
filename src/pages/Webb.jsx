import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Context from "../context/defaultContext";

import Code from "./webb/activate/Code";
import Qr from "./webb/activate/Qr";
import Activate from "./webb/activate/Activate";
import UserName from "./webb/activate/UserName";
import SignActivation from "./webb/activate/Sign";
import Wait from "./webb/activate/Wait";
import Receipt from "./webb/activate/Receipt";
import Login from "./webb/Login";
import Sign from "./webb/sign/Sign";
import ReceiptSign from "./webb/sign/Receipt";
import Start from "./webb/Start";



export default class extends React.Component {
  static contextType = Context;
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/webb" component={Start} />
          <Route path="/webb/login" component={Login} />
          <Route exact path="/webb/activate" component={Activate} />
          <Route path="/webb/activate/code" component={Code} />
          <Route path="/webb/activate/qr" component={Qr} />
          <Route path="/webb/activate/userName" component={UserName} />
          <Route path="/webb/activate/sign" component={SignActivation} />
          <Route path="/webb/activate/wait" component={Wait} />
          <Route path="/webb/activate/receipt" component={Receipt} />
          <Route exact path="/webb/sign" component={Sign} />
          <Route path="/webb/sign/receipt" component={ReceiptSign} />
        </Switch>
      </Fragment>
    );
  }
}
