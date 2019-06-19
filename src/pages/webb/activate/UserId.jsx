import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      userName: undefined
    };
  }

  render() {
    return (
      <div className="centerdComponent text-center">
        <h2>Choose your username</h2>
        <Form>
          <FormGroup>
            <Input
              type="text"
              placeholder="Username"
              onChange={e => this.setState({ userName: e.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          onClick={e => {
            this.context.setUserName(this.state.userName, () => history.push("/webb/wait"))
          }}
        >
          Next
        </Button>
      </div>
    );
  }
}
