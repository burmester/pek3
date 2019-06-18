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
      this.setState(
        {
          data: JSON.parse(data)
        },
        () => history.push("/")
      );
    } else {
      this.setState({
        data: {
          token: this.generateToken()
        }
      });
    }
  }

  generateToken = () => {
    return (
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString()
    );
  };

  removeData = callback => {
    localStorage.clear();
    this.setState(
      {
        data: {
          token: this.generateToken()
        }
      },
      callback
    );
  };

  scanOk = callback => {
    if (false) {
      this.getStatus(this.state.token);
    }
    callback();
  };

  enterToken = (token, callback) => {
    this.setState(
      { data: { ...this.state.data, enterToken: token } },
      callback
    );
  };

  setPasscode = (passcode, callback) => {
    const data = { ...this.state.data, passcode: passcode };
    localStorage.setItem("data", JSON.stringify(data));
    this.setState({ data: data }, callback);
  };

  setStatus = async (status, callback) => {
    const token = this.state.data.token;
    const response = await fetch(
      "/.netlify/functions/status?token=" + token,
      {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: status })
      }
    );
    const body = await response.json();
    if (response.status !== 201) throw Error(body.message);
    this.setState(
      { data: { ...this.state.data, status: body.status } },
      callback
    );
  }

  getStatus = async () => {
    const token = this.state.data.token;
    const response = await fetch(
      "/.netlify/functions/status?token=" + token
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body
  };

  deleteToken = async (callback) => {
    const token = this.state.data.token;
    const response = await fetch(
      "/.netlify/functions/status?token=" + token,
      {
        method: 'DELETE',
        cache: 'no-cache',
      }
    );
    if (response.status !== 200) throw Error();
    this.removeData(callback)
  }

  render() {
    return (
      <Context.Provider
        value={{
          data: this.state.data,
          loading: this.state.loading,
          removeData: this.removeData,
          getStatus: this.getStatus,
          setStatus: this.setStatus,
          deleteToken: this.deleteToken,
          enterToken: this.enterToken,
          scanOk: this.scanOk,
          setPasscode: this.setPasscode
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default GlobalState;
