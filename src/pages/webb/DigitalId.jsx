import React, { Fragment } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import Context from "../../context/defaultContext";
import history from "../../utils/history";

export default class Login extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="hero d-flex align-items-center justify-content-center">
          <i
            className="material-icons"
            style={{
              fontSize: "50px",
              color: "#005fa5"
            }}
          >
            lock_outline
          </i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center"
          style={{marginTop:"0"}}>
            <h2>Digital ID</h2>
          </div>
          <Form>
            <FormGroup>
              <Label for="userName">Personal ID <span>6-35 digits</span></Label>
              <Input
                style={{textAlign:"left"}}
                id="userName"
                autoFocus />
            </FormGroup>
            <FormGroup check style={{marginBottom:"20px", marginTop:"-10px"}}>
              <Label check>
                <Input type="checkbox" /> Save my Personal ID
              </Label>
            </FormGroup>
            <Button color="primary" block onClick={e => history.push("/webb/login/qr")}>
              Log in
            </Button>
          </Form>
          <Button block onClick={e => history.goBack()}
          className="athenaBack own">
             Select a different log in method
            </Button>
        </div>
      </Fragment>
    );
  }
}