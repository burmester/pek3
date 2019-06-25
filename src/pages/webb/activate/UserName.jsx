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
            Activate Digital ID
        </h1>
          <hr />
          <h3>Personal ID</h3>
          <p>
            You will use your Personal ID to identify yourself when you login using the Digital ID app. It is also used to login to the indvidual Banking app.
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
          <Form onSubmit={e => {
            e.preventDefault()
            history.push("/webb/activate/sign")
          }}>
            <FormGroup>
              <Input
                type="text"
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
