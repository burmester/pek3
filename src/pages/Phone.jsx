import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Context from "../context/defaultContext";

import Footer from "../components/phone/Footer";
import Code from "./phone/activate/Code";
import Qr from "./phone/activate/Qr";
import Passcode from "./phone/activate/Passcode";
import Receipt from "./phone/activate/Receipt";
import Start from "./phone/Start";
import Login from "./phone/Login";
import CheckSign from "./phone/CheckSign";
import RemoveUser from "./phone/RemoveUser";
import Contact from "./phone/Contact";
import About from "./phone/About";
import Sign from "./phone/Sign";
import ChangePasscode from "./phone/ChangePasscode";




export default class extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/phone" component={Start} />
          <Route path="/phone/code" component={Code} />
          <Route path="/phone/qr" component={Qr} />
          <Route path="/phone/passcode" component={Passcode} />
          <Route path="/phone/receipt" component={Receipt} />
          <Route path="/phone/remove" component={RemoveUser} />
          <Route path="/phone/contact" component={Contact} />
          <Route path="/phone/about" component={About} />
          <Route path="/phone/login" component={Login} />
          <Route path="/phone/checkSign" component={CheckSign} />
          <Route path="/phone/sign" component={Sign} />
          <Route path="/phone/changePasscode" component={ChangePasscode} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}
