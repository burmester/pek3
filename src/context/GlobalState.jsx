import React, { Component } from "react";

import Context from "./defaultContext";

class GlobalState extends Component {
  state = {
    data: undefined,
    loading: false,
    showMenu: false,
    transferData: false
  };

  componentDidMount() {
    const data = localStorage.getItem("data");
    if (data) {
      this.setState(
        {
          data: JSON.parse(data)
        }
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
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString()
    );
  };

  logOut = callback => {
    this.setState(
      { data: { ...this.state.data, status: "LOGOUT" } },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state.data))
        callback();
      }
    );
  }

  logIn = callback => {
    this.setState(
      { data: { ...this.state.data, status: "OK" } },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state.data))
        callback();
      }
    );
  }

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


  signOK = callback => {
    this.setStatus("SIGNED", callback);
  };

  setToken = (token, callback) => {
    this.setState(
      { data: { ...this.state.data, token: token } },
      callback
    );
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

  setTransferData = (data, callback) => {
    this.setState(
      { transferData: data }, callback
    );

  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <Context.Provider
        value={{
          data: this.state.data,
          showMenu: this.state.showMenu,
          loading: this.state.loading,
          removeData: this.removeData,
          getStatus: this.getStatus,
          setStatus: this.setStatus,
          deleteToken: this.deleteToken,
          setToken: this.setToken,
          scanOk: this.scanOk,
          signOK: this.signOK,
          toggleMenu: this.toggleMenu,
          logOut: this.logOut,
          logIn: this.logIn,
          setTransferData: this.setTransferData,
          transferData: this.state.transferData,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default GlobalState;
