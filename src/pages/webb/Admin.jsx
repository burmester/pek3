import React from "react";
import { Container, Button } from "reactstrap";

import Context from "../../context/defaultContext";
import history from "../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Container style={{ paddingTop: "30px" }}>
        <div className="container">
          <Button
            color="primary"
            outline
            block
            onClick={e => {
              this.context.setStatus("LOGIN", () => {
                history.push("/webb/login")
              })
            }}>Log-in</Button>
          <Button
            color="primary"
            block
            outline
            onClick={e => {
              this.context.logOut(() => history.push("/webb"))
            }}
          >
            Log-out
            </Button>
          <Button
            color="primary"
            outline
            block
            onClick={e => history.push("/webb/activate")}
          >
            Activate Digital ID
          </Button>
          <Button
            color="danger"
            outline
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



