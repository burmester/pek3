import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Context from "../context/defaultContext";

import Footer from "../components/phone/Footer";
import Activate from "./phone/activate/Activate";
import Code from "./phone/activate/Code";
import Qr from "./phone/activate/Qr";
import Wait from "./phone/activate/Wait";
import Passcode from "./phone/activate/Passcode";
import Receipt from "./phone/activate/Receipt";
import Start from "./phone/Start";
import Login from "./phone/Login";
import RemoveUser from "./phone/RemoveUser";
import Contact from "./phone/Contact";
import About from "./phone/About";


export default class extends React.Component {
  static contextType = Context;


  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/phone" component={Start} />
          <Route path="/phone/activate" component={Activate} />
          <Route path="/phone/code" component={Code} />
          <Route path="/phone/qr" component={Qr} />
          <Route path="/phone/wait" component={Wait} />
          <Route path="/phone/passcode" component={Passcode} />
          <Route path="/phone/receipt" component={Receipt} />
          <Route path="/phone/remove" component={RemoveUser} />
          <Route path="/phone/contact" component={Contact} />
          <Route path="/phone/about" component={About} />
          <Route path="/phone/login" component={Login} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}
