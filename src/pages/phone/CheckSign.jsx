import React, { Fragment } from "react";
import Context from "../../context/defaultContext";
import history from "../../utils/history";
import Spinner from "../../components/Spinner";
import Header from "../../components/phone/Header";

export default class CheckSign extends React.Component {
  static contextType = Context;
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.context.getStatus((body) => {
        if (body.status === "SIGN") {
          history.push("/phone/sign")
        }
      })
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.push("/phone")} />
        <div className="centerdComponent text-center" style={{ marginTop: "30px" }}>
          <Spinner width="50px" image={"/spinner.png"} />
          <h2 style={{ marginTop: "30px" }}>Looking for something to sign.</h2>
        </div>
      </Fragment>
    );
  }
}
