import React from "react";
import { Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="centerdComponent text-center">
        <h2>Sign your Digital ID</h2>
        <Button
          onClick={e => {
            this.context.signOK(() => history.push("/webb/activate/wait"))
          }}
        >
          Sign
        </Button>
      </div>
    );
  }
}
