import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      token: false
    };
  }

  render() {
    return (
      <div className="centerdComponent text-center">
        <h2>Enter teh activation code</h2>
        <Form>
          <FormGroup>
            <Input
              type="tel"
              placeholder="Activation code"
              onChange={e => this.setState({ token: e.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          onClick={e =>
            this.context.setToken(this.state.token, () =>
              history.push("/webb/qr")
            )
          }
        >
          Next
        </Button>
      </div>
    );
  }
}
