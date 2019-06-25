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
              <h2>You are now logged.</h2>
            </div>
            <Button
              outline
              block
              color="primary"
              onClick={e => {
                this.context.setStatus("SIGN", () => {
                  history.push("/webb/sign")
                })
              }}
            >
              Sign with Digital ID
            </Button>
            <Button
              block
              outline
              onClick={e => {
                this.context.logOut(() => history.push("/webb"))
              }}
            >
              Log out
            </Button>
          </div>
        </Container>
      );
    } else if (this.context.data && this.context.data.status === "LOGOUT") {
      return (
        <Container style={{ paddingTop: "30px" }}>          <div className="container">
          <div className="centerdComponent text-center">
            <h2>You are not inlogged.</h2>
          </div>
          <Button
            color="primary"
            block
            onClick={e => {
              this.context.setStatus("LOGIN", () => {
                history.push("/webb/login")
              })
            }}>Login with Digital ID</Button>
          <Button
            color="danger"
            block
            outline
            onClick={e => this.context.removeData(() => history.push("/webb"))}
          >
            Remove Digital ID
          </Button>
        </div>
        </Container>
      )
    } else {
      return (
        <Container style={{ paddingTop: "30px" }}>          <div className="container">
          <Button
            color="primary"
            block
            onClick={e => history.push("/webb/activate")}
          >
            Activate Digital ID
          </Button>
          <Button
            color="danger" outline
            block
            onClick={e => this.context.removeData(() => history.push("/webb"))}
          >
            Remove Digital ID
          </Button>
        </div>
        </Container>
      )
    }
  }
}



