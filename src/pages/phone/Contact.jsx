import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Header from "../../components/phone/Header";

import Context from '../../context/defaultContext';
import history from '../../utils/history';

export default class Contact extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <Header showMenu={false} cancelText="Back" onCancel={() => history.goBack()} />
        <div className="container">
          <div className="centerdComponent">
            <h2>Contact us</h2>
            <p>Phone:YY-XX XXX XX XXX</p>
          </div>
        </div>
      </Fragment>)
  }
}
