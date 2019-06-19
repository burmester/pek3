import React from "react";
import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.context.getStatus((body) => {
        if (body.status === "USERNAME") {
          history.push("/phone/passcode")
        }
      })
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
      return (
        <div className="centerdComponent text-center">
          <h2>Waiting for internet service</h2>
        </div>
      );
  }
}
