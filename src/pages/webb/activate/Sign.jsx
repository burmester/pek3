import React, { Fragment } from "react";
import { Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  getDate = () => {
    const current_datetime = new Date()
    const spec_date = current_datetime.getDate() + "-" + current_datetime.getMonth() + 1 + "-" + current_datetime.getFullYear()
    return spec_date
  }

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Activate Digital ID
      </h1>
          <hr />
          <h3>Sign</h3>
          <p>
            Mats Matsson would like to activate my Handelsbanken Digital ID app.
          </p>
          <p>
            Personal ID: 720302
          </p>
          <p>
            Date: {this.getDate()}
          </p>
          <div className="footer">
            <Button onClick={e => history.goBack()} color="secondary">
              Back
          </Button>
            <Button onClick={e => {
              e.preventDefault()
              this.context.signOK(() => history.push("/webb/activate/qr"))
            }}
              color="secondary">
              Sign
          </Button>
          </div>
        </div>
      </Fragment >
    );
  }
}
