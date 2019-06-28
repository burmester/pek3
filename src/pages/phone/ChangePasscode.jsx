import React, { Fragment } from "react";
import { Form, FormGroup, Button } from "reactstrap";

import Context from "../../context/defaultContext";
import history from "../../utils/history";

import Header from "../../components/phone/Header";


export default class Passcode extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      showRecipte: false,
    };
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ showRecipte: true });
  };

  render() {
    if (this.state.showRecipte) {
      return (
        <Fragment>
          <Header showMenu={false} />
          <div className="hero d-flex align-items-center justify-content-center">
            <i className="material-icons"
              style={{
                fontSize: "50px",
                color: "#005fa5",
                border: "2px solid #005fa5",
                borderRadius: "50px"
              }}
            >check</i>
          </div>
          <div className="container">
            <div className="centerdComponent text-center">
              <h2>Confirmation</h2>
              <p>
                You have now change you passcode.
              </p>
            </div>
            <Button color="primary" block onClick={e => history.push('/phone')}>OK</Button>
          </div>
        </Fragment>)
    } else {

      return (
        <Fragment>
          <Header showMenu={false} onCancel={() => history.push("/phone")} />
          <div className="hero d-flex align-items-center justify-content-center">
            <i className="material-icons">lock_outline</i>
          </div>
          <div className="container">
            <div className="centerdComponent text-center">
              <h2>Change your passcode</h2>
              Number of characters: 6
            <br />
              Valid characters: 0-9 (digits)
            <br />
              <br />
              Not allowed:
            <br />
              Six identical digits (111111)
            <br />
              Sequences starting or ending with 1 (123456, 654321)
            <br />
              Palindrome (123321, 154451)
          </div>
            <Form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup>
                <input
                  className="form-control disc"
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  placeholder="Current passcode"
                  autoFocus
                />
              </FormGroup>
              <FormGroup>
                <input
                  className="form-control disc"
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  placeholder="New passcode"
                />
              </FormGroup>
              <FormGroup>
                <input
                  className="form-control disc"
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  placeholder="Repeat new passcode"
                />
              </FormGroup>
              <Button color="primary" block type="submit">
                Continue
          </Button>
            </Form>
          </div>
        </Fragment>
      );
    }
  }
}
