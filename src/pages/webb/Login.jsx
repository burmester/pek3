import React from "react";
import ReactSVG from 'react-svg'

import Context from "../../context/defaultContext";
import history from "../../utils/history";

export default class DigitalId extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="logon">
        <div onClick={e => history.push("/webb/login/digtalId")}>
          <div>
            <i
              className="material-icons"
              style={{
                fontSize: "50px",
                color: "#005fa5"
              }}
            >
              lock_outline
          </i>
          </div>
          <div>
            <h3>Digital Id</h3>
          </div>
        </div>
        <div>
          <div>
            <ReactSVG src="/images/svg/Quick_logon.svg" />
          </div>
          <div>
            <h3>Quick Log-on</h3>
          </div>
        </div>
        <div>
          <div>
            <ReactSVG src="/images/svg/Card_reader.svg" />
          </div>
          <div>
            <h3>Card reader without cable</h3>
          </div>
        </div>
        <div>
          <div>
            <ReactSVG src="/images/svg/Card_reader_cable.svg" />
          </div>
          <div>
            <h3>Card reader with cable</h3>
          </div>
        </div>
      </div>
    );
  }
}

