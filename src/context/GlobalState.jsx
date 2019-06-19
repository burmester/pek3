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
    this.setStatus("SCANED", callback);
  };

  setToken = (token, callback) => {
    this.setState(
      { data: { ...this.state.data, token: token } },
      callback
    );
  };

  setUserName = (userName, callback) => {
    this.setStatus("USERNAME", callback);
  };

  setPasscode = (passcode, callback) => {
    this.setStatus("PASSCODE", arg => {
      localStorage.setItem("data", JSON.stringify(this.state.data))
      callback(arg)
    });
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

  getStatus = async (callback) => {
    const token = this.state.data.token;
    const response = await fetch(
      "/.netlify/functions/status?token=" + token
    );
    const body = await response.json();
    if (response.status === 204) callback(body)
    else if (response.status === 200) callback(body)
    else throw Error(body.message);
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
    if (response.status !== 204) throw Error();
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
          setToken: this.setToken,
          scanOk: this.scanOk,
          setPasscode: this.setPasscode,
          setUserName: this.setUserName
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default GlobalState;
