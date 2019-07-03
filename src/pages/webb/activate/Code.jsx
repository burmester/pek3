import React, { Fragment } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Code extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.context.setToken(this.state.token.replace(/\s/g, ''), () =>
      history.push("/webb/activate/userName")
    )
  }

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Activate Digital Id
          </h1>
          <hr />
          <h3>Activation code</h3>
          <ol>
            <li>
              Open the Digital Id app and press <b>Start activation</b>.
            </li>
            <li>
              An activation code will be displayed in the app. Please enter this below.
            </li>
            <li>
              Click continue.
            </li>
          </ol>
          <h3>Activation code <span>8 digits</span></h3>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                type="tel"
                placeholder="Activation code"
                value={this.state.token}
                onChange={e => {
                  const value = e.target.value.replace(/\s/g, '');
                  if (value.length%4 === 0) {
                    this.setState({ token: e.target.value + " " })
                  } else {
                    this.setState({ token: e.target.value })
                  }

                }}
                inputMode="numeric"
                autoComplete="false"
              />
            </FormGroup>
            <div className="footer">
              <Button onClick={e => history.goBack()} color="secondary">
                Back
              </Button>
              <Button type="submit" color="secondary">
                Continue
              </Button>
            </div>

          </Form>
        </div>
      </Fragment>
    );
  }
}
