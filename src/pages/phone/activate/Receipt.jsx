import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

import Header from "../../../components/phone/Header";


export default class Receipt extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <Header showMenu={false} heading={"Receipt"}/>
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
              You have successfully activated Digital Id. Your app is now ready to use.
            </p>
          </div>
          <Button color="primary" block onClick={e => history.push('/phone')}>OK</Button>
        </div>
      </Fragment>)
  }
}
