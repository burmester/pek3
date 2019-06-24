import React, { Fragment } from "react";
import { Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Activate your security app</h2>
            <p>You will need you card, cardreader and a mobilephone.</p>
          </div>
          <Button
            color="primary"
            block
            onClick={e => history.push("/webb/activate/code")}
          >
            Start activation
          </Button>
        </div>
      </Fragment>
    );
  }
}
