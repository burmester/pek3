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
import DigitalID from "./webb/DigitalId";
import Login from "./webb/Login";
import LoginQR from "./webb/LoginQr";
import Sign from "./webb/sign/Sign";
import ReceiptSign from "./webb/sign/Receipt";
import Start from "./webb/Start";
import Transfer from "./webb/sign/Transfer";
import Review from "./webb/sign/Review";




export default class extends React.Component {
  static contextType = Context;
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/webb" component={Start} />
          <Route exact path="/webb/login" component={Login} />
          <Route exact path="/webb/login/digtalId" component={DigitalID} />
          <Route exact path="/webb/login/qr" component={LoginQR} />
          <Route exact path="/webb/activate" component={Activate} />
          <Route exact path="/webb/activate/code" component={Code} />
          <Route exact path="/webb/activate/qr" component={Qr} />
          <Route exact path="/webb/activate/userName" component={UserName} />
          <Route exact path="/webb/activate/sign" component={SignActivation} />
          <Route exact path="/webb/activate/wait" component={Wait} />
          <Route exact path="/webb/activate/receipt" component={Receipt} />
          <Route exact path="/webb/transfer" component={Transfer} />
          <Route exact path="/webb/review" component={Review} />
          <Route exact path="/webb/sign" component={Sign} />
          <Route exact path="/webb/sign/receipt" component={ReceiptSign} />
        </Switch>
      </Fragment>
    );
  }
}
