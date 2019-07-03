import React from "react";
import { Container, Button } from "reactstrap";

import Context from "../../context/defaultContext";
import history from "../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    if (this.context.data && this.context.data.status === "OK") {
      return (
        <Container style={{ paddingTop: "30px" }}>
          <div className="container">
            <div className="centerdComponent text-center">
              <h2>You have logged in succesful!</h2>
            </div>
          </div>
        </Container>
      );
    } else if (this.context.data && this.context.data.status === "LOGOUT") {
      return (
        <Container style={{ paddingTop: "30px" }}>
          <div className="container">
            <div className="centerdComponent text-center">
              <h2>You have logged out.</h2>
            </div>
          </div>
        </Container>
      )
    } else {
      return (
        <Container style={{ paddingTop: "30px" }}>
          <div className="container">
            <div className="centerdComponent text-center">
              <h2>No Digital Id is activated.</h2>
            </div>
            <Button
              color="primary"
              outline
              block
              onClick={e => history.push("/webb/activate")}
            >
              Activate Digital Id
          </Button>
            <Button
              color="danger" outline
              block
              onClick={e => this.context.removeData(() => history.push("/webb"))}
            >
              Remove Digital Id
          </Button>
          </div>
        </Container>
      )
    }
  }
}



