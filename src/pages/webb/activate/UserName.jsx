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
        <Form onSubmit={e => {
            history.push("/webb/activate/sign")
          }}>
          <FormGroup>
            <Input
              type="text"
              placeholder="Username"
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
