import React, { Fragment } from "react";
import { Button } from "reactstrap";

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
          <h3>Activate your Digital Id app</h3>
          <p>
            A one-off activation is required for every device. To start the activation process you will need to logged in with your log-on card, card reader and cable.
          </p>
          <ol>
            <li>
              Download Handelsbanken Digital Id from App Store or Google Play onto the device you wish to activate.
              </li>
            <li>
              Start the activation process by clicking the link below.
              </li>
          </ol>
          <p>
            Please keep your cable connected throughout the process and have your mobile or tablet ready.
            </p>
          <Button
            color="link"
            onClick={e => history.push("/webb/activate/code")}
          >
            Start activation
          </Button>
          <div className="footer"></div>
        </div>
      </Fragment>
    );
  }
}
