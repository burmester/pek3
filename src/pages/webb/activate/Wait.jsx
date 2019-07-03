import React, { Fragment } from "react";
import Context from "../../../context/defaultContext";
import history from "../../../utils/history";
import { Button } from "reactstrap";
import Spinner from "../../../components/Spinner";

export default class Wait extends React.Component {
  static contextType = Context;
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.context.getStatus((body) => {
        if (body.status === "OK") {
          this.context.setStatus("OK", () => {
            localStorage.setItem("data", JSON.stringify(this.context.data))
            history.push("/webb/activate/receipt")
          })
        }
      })
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    this.context.setStatus("OK")
  }

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Activate Digital Id
            </h1>
          <hr />
          <h3>Choose passcode</h3>
          <p>Please choose a 6 digit passcode in the app and click <b>Confirm</b></p>
          <p>It is important that you keep your passcode secret and you should try not to use a number other people could guess.</p>
          <div className="spinnerContainer">
            <Spinner width="50px" image={"/spinner.png"} />
          </div>
          <div className="footer">
            <Button onClick={e => history.goBack()} color="secondary">
              Cancel
              </Button>
          </div>
        </div>
      </Fragment >
    );
  }
}
