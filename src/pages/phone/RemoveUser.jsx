import React, { Fragment } from 'react';
import { Button } from "reactstrap";

import Header from "../../components/phone/Header";

import Context from '../../context/defaultContext';
import history from '../../utils/history';

export default class RemoveUser extends React.Component {
  static contextType = Context;

  onSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Your profile will be removed, are you sure?")) {
      this.context.deleteToken(() => {
        history.push('/phone')
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.goBack()} heading="Remove profile"/>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Remove profile</h2>
            <p>Your profile will be removed and you will have to activate again on Individual Online Banking with card reader with cable.</p>
          </div>
          <Button color="danger" block onClick={this.onSubmit.bind(this)}>
            Remove
            </Button>
        </div>
      </Fragment>)
  }
}
