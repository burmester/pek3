import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import Context from "../../context/defaultContext";

class Header extends Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div
          className="text-center"
          style={{
            lineHeight: "35px",
            background: "#e1f0f5",
            padding: "4px 0",
            position: "relative",
            boxShadow: "rgba(0, 0, 0, 0.22) 0px 4px 5px"
          }}
        >
          <div
            style={{
              color: "#005fa5",
              fontWeight: "700",
              fontSize: "18px"
            }}
          >
            Handelsbanken
          </div>
          {this.props.onCancel && (
            <Button
              color="link"
              style={{
                position: "absolute",
                top: "4px",
                left: 0
              }}
              onClick={this.props.onCancel}
            >
              {this.props.cancelText ? this.props.cancelText : "Cancel"}
            </Button>
          )}
          {this.props.showMenu && (
          <Button
            color="link"
            style={{
              position: "absolute",
              top: "4px",
              right: 0
            }}
            onClick={this.context.toggleMenu}
          >
            <i className="material-icons">more_horiz</i>
          </Button>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Header;
