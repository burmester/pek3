import React, { Fragment } from "react";
import { Form, FormGroup, Button } from "reactstrap";

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
          <div className="container">
            <div className="topContainer">
              I identify myself at: <span>Handelsbanken</span>
            </div>
            <Form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup>
                <input
                  pattern="[0-9]*"
                  inputMode="numeric"
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
          <div className="container">
            <div className="topContainer">
              I identify myself at: <span>Handelsbanken</span>
            </div>
            <div className="data">
              &lt;Transactional information&gt;
            </div>
            <Form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup>
                <input
                  maxLength="6"
                  className="form-control disc"
                  type="number"
                  pattern="[0-9]*"
                  placeholder="Passcode"
                  inputmode="numeric"
                  autofocus />
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
