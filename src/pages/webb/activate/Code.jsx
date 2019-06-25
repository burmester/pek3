import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Code extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      token: false
    };
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.context.setToken(this.state.token, () =>
      history.push("/webb/activate/qr")
    )
  }

  render() {
    return (
      <div className="centerdComponent text-center">
        <h2>Enter the activation code</h2>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Input
              type="tel"
              placeholder="Activation code"
              onChange={e => this.setState({ token: e.target.value })}
              pattern="[0-9]*" 
              inputMode="numeric"
            />
          </FormGroup>
          <Button type="submit">
            Next
        </Button>
        </Form>
      </div>
    );
  }
}
