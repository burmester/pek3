import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="centerdComponent text-center">
        <h2>Choose your username</h2>
        <Form>
          <FormGroup>
            <Input
              type="text"
              placeholder="Username"
            />
          </FormGroup>
        </Form>
        <Button
          onClick={e => {
            history.push("/webb/activate/sign")
          }}
        >
          Next
        </Button>
      </div>
    );
  }
}
