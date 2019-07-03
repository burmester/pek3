import React, { Fragment } from 'react';
import { Row, Col } from "reactstrap";

import Header from "../../components/phone/Header";

import Context from '../../context/defaultContext';
import history from '../../utils/history';

export default class Contact extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <Header showMenu={false} cancelText="Back" onCancel={() => history.goBack()} />
        <div className="groupHeading">Handelsbaneken 24/7 <span>(365 days a year)</span></div>
        <div className="listItem">
          <i
            className="material-icons"
            style={{
              fontSize: "30px",
              color: "#005fa5"
            }}
          >
            phone
          </i>
          <div>
            <b>
              From the UK
            </b>
            <div>
              0800 470 8000
            </div>
          </div>
        </div>
        <div className="listItem">
          <i
            className="material-icons"
            style={{
              fontSize: "30px",
              color: "#005fa5"
            }}
          >
            phone
          </i>
          <div>
            <b>
              From abroad
            </b>
            <div>
              +44 20 757 88247
            </div>
          </div>
        </div>
      </Fragment>)
  }
}
