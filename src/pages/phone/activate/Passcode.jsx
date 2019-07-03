import React, { Fragment } from "react";
import { Form, FormGroup, Button } from "reactstrap";

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
    e.preventDefault()
    if (
      !this.state.invalideCode &&
      !this.state.noSameCode &&
      this.state.passcode.length === 6
    )
      this.context.setStatus("OK", () => {
        localStorage.setItem("data", JSON.stringify(this.context.data))
        history.push("/phone/receipt")
      })
    else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.push("/phone")} heading={"Choose passcode"} />
        <div className="hero d-flex align-items-center justify-content-center">
          <i className="material-icons">lock_outline</i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Choose your passcode for Digital Id.</h2>
            Number of characters: 6
            <br />
            Valid characters: 0-9 (digits)
            <br />
            <br />
            Not allowed:
            <br />
            Six identical digits (111111)
            <br />
            Sequences/series (123456, 654321, 345678, 890123)
          </div>
          <Form onSubmit={this.onSubmit.bind(this)}>
            <FormGroup>
                <input
                  className="form-control disc"
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  placeholder="Repeat passcode"
                  onChange={this.passcodeChange}
                  value={this.state.passcode}
                  invalid={this.state.invalideCode.toString()}
                   />
            </FormGroup>
            <FormGroup>
            <input
                  className="form-control disc"
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  placeholder="Repeat passcode"
                  invalid={this.state.noSameCode.toString()}
                  onChange={this.repeatPasscodeChange}
                   />
            </FormGroup>
            <p
            style={{
              color: "#dc3545",
              visibility: this.state.error ? "" : "hidden"
            }}
          >
            Your passcode do not meet the requirements. Please try again.
          </p>
          <Button color="primary" block type="submit">
            OK
          </Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}
