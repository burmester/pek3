import React, { Component } from "react";

import Context from "./defaultContext";
import history from "../utils/history";

class GlobalState extends Component {

  state = {
    data: undefined,
    loading: false
  };

  componentDidMount() {
    const data = localStorage.getItem("data");
    if (data) {
      this.setState({
        data: JSON.parse(data),
      }, () => history.push("/"));
    } else {
      this.setState({
        data: {
          token : Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString()
        }
      })
    }

  }

  removeData = callback => {
    localStorage.clear();
    this.setState({ data: undefined }, callback);
  };

  getStatus = async (token, callback) => {
    const response = await fetch("/.netlify/functions/getStatus?token=" + token);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    localStorage.setItem("data", JSON.stringify(body));
    this.setState({ data: body }, callback);
  }

  render() {
    return (
      <Context.Provider
        value={{
          data: this.state.data,
          loading: this.state.loading,
          getStatus: this.getStatus,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default GlobalState;
