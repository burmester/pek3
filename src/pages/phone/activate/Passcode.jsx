import React, { Fragment } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

import Header from "../../../components/phone/Header";


export default class Passcode extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      passcode: "",
      verifyer: /^(?!.*(\d)\1{5}).*$/,
      invalideCode: false,
      noSameCode: false,
      error: false
    };
  }

  passcodeChange = e => {
    const passcode = e.target.value;
    const invalideCode = !passcode.match(this.state.verifyer);
    this.setState({ passcode: passcode, invalideCode: invalideCode });
  };

  repeatPasscodeChange = e => {
    const passcode = e.target.value;
    if (passcode.length === 6) {
      const noSameCode = passcode !== this.state.passcode;
      if (this.state.error && !noSameCode) {
        this.setState({ noSameCode: noSameCode, error: false });
      } else {
        this.setState({ noSameCode: noSameCode });
      }
    }
  };

  onSubmit = e => {
    if (
      !this.state.invalideCode &&
      !this.state.noSameCode &&
      this.state.passcode.length === 6
    )
      this.context.setPasscode(this.state.passcode, () =>
        history.push("/phone/receipt")
      );
    else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.push("/phone")} />
        <div className="hero d-flex align-items-center justify-content-center">
          <i className="material-icons">lock_outline</i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Choose your passcode</h2>
            Number of characters:
            <br />
            6 Valid characters: 0-9 (digits)
            <br />
            <br />
            Not allowed:
            <br />
            Six identical digits, e.g. 111111
            <br />
            Sequences starting or ending with 1 (123456, 654321)
            <br />
            Palindrome, e.g. 123321, 154451
          </div>
          <Form>
            <FormGroup>
              <Input
                maxLength="6"
                type="password"
                placeholder="Passcode"
                onChange={this.passcodeChange}
                value={this.state.passcode}
                invalid={this.state.invalideCode}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                maxLength="6"
                placeholder="Repeat passcode"
                invalid={this.state.noSameCode}
                onChange={this.repeatPasscodeChange}
              />
            </FormGroup>
          </Form>
          <p
            style={{
              color: "#dc3545",
              visibility: this.state.error ? "" : "hidden"
            }}
          >
            You need to enter a correct passcode.
          </p>
          <Button color="primary" block onClick={this.onSubmit.bind(this)}>
            Continue
          </Button>
        </div>
      </Fragment>
    );
  }
}
