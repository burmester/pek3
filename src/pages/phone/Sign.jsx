import React, { Fragment } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../context/defaultContext";
import history from "../../utils/history";

import Header from "../../components/phone/Header";


export default class Passcode extends React.Component {
  static contextType = Context;

  onSubmit = e => {
    this.context.signOK(() =>
      history.push("/phone")
    );
  };

  renderSignText = () => {
    if (this.context.data.status === "LOGIN") {
      return (
        <Fragment>
          <h2>I identify my self at Handelsbanken</h2>
          <p className="text-left">

          </p>
        </Fragment>
      )
    }
    if (this.context.data.status === "SIGN") {
      return (
        <Fragment>
          <h2>I'm signing:</h2>
          <p className="text-left">
          Transactional data
          </p>
        </Fragment>
      )
    }
    return false
  }

  render() {
    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.push("/phone")} />
        <div className="hero d-flex align-items-center justify-content-center">
          <i className="material-icons">lock_outline</i>
        </div>
        <div className="container">
          <div className="centerdComponent">
            {this.context.data && this.renderSignText()}
          </div>
          <Form>
            <FormGroup>
              <Input
                maxLength="6"
                type="password"
                placeholder="Passcode"
              />
            </FormGroup>
          </Form>
          <Button color="primary" block onClick={this.onSubmit.bind(this)}>
            Sign
          </Button>
        </div>
      </Fragment>
    );
  }
}
