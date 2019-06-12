import React, { Component, Fragment } from 'react';
import { Button} from 'reactstrap';

import history from '../../utils/history';

import Context from '../../context/defaultContext';

class Header extends Component {
  static contextType = Context;

  render() {
    const data = this.context.data;
    return (
      <Fragment>
        <div className="text-center" style={{
          lineHeight: "35px",
          background: "#e1f0f5",
          padding: "4px 0",
          position: "relative"
        }}>
          <div style={{
            color: "#005fa5",
            fontWeight: "700",
            fontSize: "18px"
          }}>Handelsbanken</div>
          {(data && data.cancel && 
          <Button color="link" style={{ 
            position: "absolute",
            top: "4px",
            left: 0
          }}>Cancel</Button>
          )}
          <Button color="link" style={{
            position: "absolute",
            top: "4px",
            right: 0
          }}>
            <i className="material-icons">more_horiz</i>
            </Button>
        </div>
      </Fragment>
    )
  }
}


export default Header;