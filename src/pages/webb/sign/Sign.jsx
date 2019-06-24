import React from "react";
import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.context.getStatus((body) => {
        if (body.status === "OK") {
          history.push("/webb/sign/receipt")
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
          <h2>Waiting for Mobile App</h2>
        </div>
      );
  }
}
