import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Header from "../../components/phone/Header";

import Context from '../../context/defaultContext';
import history from '../../utils/history';

export default class RemoveUser extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.goBack()} />
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Remove your profile</h2>
            <p>You will no longer be able to use Digital ID to Loggin or Sign.</p>
            <p>Are you sure?</p>
          </div>
          <div className="d-flex justify-content-around">
            <Button style={{ width: "100px" }} color="danger" onClick={e => {
              this.context.deleteToken(() => history.push('/phone'))
            }}>Yes</Button>
            <Button style={{ width: "100px" }} onClick={e => history.push('/phone')}>No</Button>
          </div>
        </div>
      </Fragment>)
  }
}
