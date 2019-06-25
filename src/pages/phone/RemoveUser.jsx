import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Button } from "reactstrap";

import Header from "../../components/phone/Header";

import Context from '../../context/defaultContext';
import history from '../../utils/history';

export default class RemoveUser extends React.Component {
  static contextType = Context;

  onSubmit = (e) => {
    e.preventDefault();
    this.context.deleteToken(() => {
      alert("Your profile has been removed")
      history.push('/phone')
    })
  }

  render() {
    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.goBack()} />
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Remove your profile</h2>
            <p>To remove your profile enter you passcode and press OK.</p>
          </div>
          <Form onSubmit={this.onSubmit.bind(this)}>
            <FormGroup>
              <Input
                maxLength="6"
                type="password"
                placeholder="Passcode"
                pattern="[0-9]*" 
                inputMode="numeric"
              />
            </FormGroup>
            <Button color="danger" block type="submit">
              Delete
            </Button>
          </Form>
        </div>
      </Fragment>)
  }
}
