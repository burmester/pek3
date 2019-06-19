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
            <h2>About</h2>
            <p>
              Every day is taco ipsum tuesday. Fish tacos with cabbage slaw and a side of chips and guac. How bout a gosh darn quesadilla? Tacos al pastor made with adobada meat. How do you feel about hard shelled tacos? Ooh, with diced onions and a pinch of cilantro. Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.
              Let’s do a beef and a chicken, and one with both. Does guac cost extra? Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Josh’s taco shack is the best taco shack. Black or pinto beans? These tacos are lit. Add in a few el Pastor with guac and diced onions. You see, the refried beans are really just the adhesive necessary to apply the soft tortilla to the hard taco shell.
            </p>
          </div>
        </div>
      </Fragment>)
  }
}
