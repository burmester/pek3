import React, { Fragment, Component } from "react";
import BottomSheet from 'react-swipeable-bottom-sheet';

import history from "../../utils/history";

import Context from "../../context/defaultContext";

class Footer extends Component {
  static contextType = Context;

  getRemoveProfile = () => {
    if (localStorage.getItem("data")) {
      return (
        <Fragment>
          <div onClick={() => {
            this.context.toggleMenu()
            history.push("/phone/changePasscode")
          }}>Change passcode</div>
          <div style={{ color: "#CD422F" }} onClick={() => {
            this.context.toggleMenu()
            history.push("/phone/remove")
          }}>Remove profile</div>
        </Fragment>

      )
    }
    return (
      <div style={{ opacity: "0.8" }} >Remove profile</div>
    )
  }

  render() {
    return (
      <BottomSheet open={this.context.showMenu} onChange={this.context.toggleMenu}>
        <div className="bottomSheet">
          {this.getRemoveProfile()}
          <div onClick={() => {
            this.context.toggleMenu()
            history.push("/phone/contact")
          }}>Contact us</div>
          <div onClick={() => {
            this.context.toggleMenu()
            history.push("/phone/about")
          }}>About Digital Id</div>
        </div>
      </BottomSheet>
    );
  }
}

export default Footer;
