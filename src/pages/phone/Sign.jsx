import React, { Fragment } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../context/defaultContext";
import history from "../../utils/history";

import Spinner from "../../components/Spinner";
import Header from "../../components/phone/Header";


export default class Passcode extends React.Component {
  static contextType = Context;

  onSubmit = e => {
    e.preventDefault()
    this.context.signOK(() =>
      setTimeout(() => this.context.setStatus("OK", () => history.push("/phone")), 2000)
    );
  };

  renderSignText = () => {
    if (this.context.data && this.context.data.status === "LOGIN") {
      return (
        <Fragment>
          <div className="hero d-flex align-items-center justify-content-center">
            <i className="material-icons">lock_outline</i>
          </div>
          <div className="container">
            <div className="centerdComponent text-center">
              <h2>I identify my self at Handelsbanken</h2>
            </div>
            <Form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup>
                <Input
                  maxLength="6"
                  type="password"
                  placeholder="Passcode"
                />
              </FormGroup>
              <Button color="primary" block type="submit">
                Login
            </Button>
            </Form>
          </div>
        </Fragment>
      )
    }
    if (this.context.data && this.context.data.status === "SIGN") {
      return (
        <Fragment>
          <div className="hero d-flex align-items-center justify-content-center">
            <i className="material-icons">lock_outline</i>
          </div>
          <div className="container">
            <div className="centerdComponent text-center">
              <h2>Signing</h2>
              <p className="text-left">
                <pre>
                  Transactional data
            </pre>
              </p>
            </div>
            <Form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup>
                <Input
                  maxLength="6"
                  type="password"
                  placeholder="Passcode"
                />
              </FormGroup>
              <Button color="primary" block type="submit">
                Sign
            </Button>
            </Form>
          </div>
        </Fragment>
      )
    }
    return (
      <div className="centerdComponent text-center" style={{ marginTop: "30px" }}>
        <Spinner width="50px" image={"/spinner.png"} />
        <h2 style={{ marginTop: "30px" }}>Wait</h2>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.push("/phone")} />
        {this.renderSignText()}
      </Fragment>
    );
  }
}
