import React, { Fragment } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Activate Digital Id
        </h1>
          <hr />
          <h3>Personal ID</h3>
          <p>
            You will use your Personal ID to identify yourself when you login using the Digital Id app. It is also used to log in to the Idividual Mobile Banking app and be used with Card Reader.
          </p>
          <ul>
            <li>
              Your Personal ID should be 8-35 characters.
            </li>
            <li>
              It can consist of any combination of letters, numbers and following symbols: . @ - _
          </li>
            <li>
              Your Personal ID must contain at least one letter.
          </li>
          </ul>
          <h3>Personal ID<span>8-35 digits</span></h3>
          <p style={{color: "#777"}}>(If you already have a Personal ID this is shown below)</p>
          <Form onSubmit={e => {
            e.preventDefault()
            history.push("/webb/activate/sign")
          }}>
            <FormGroup>
              <Input
                type="text"
                autoComplete="false" 
              />
            </FormGroup>
            <div className="footer">
              <Button onClick={e => history.push("/webb/activate/")} color="secondary">
                Cancel
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
