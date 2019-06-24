import React, { Fragment } from "react";
import { Button } from "reactstrap";

import Context from "../../context/defaultContext";
import history from "../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>You are now logged.</h2>
          </div>
          <Button
            color="primary"
            onClick={e => history.push("/webb/activate")}
          >
            Activate Digital ID
          </Button>
          <Button
            color="primary"
            onClick={e => {
              this.context.setStatus("SIGN", () => {
                history.push("/webb/sign")
              })
            }}
          >
            Sign a transaction
          </Button>
          <Button
            onClick={e => {
              history.push("/")
            }}
          >
            Log out
          </Button>
        </div>
      </Fragment>
    );
  }
}
