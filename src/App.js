import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="left-menu">
          <div className="layer">
            <Onetxt/>
          </div>
        </div>
        <div id="right-menu">
          <OnetxtR/>
          <Login/>
        </div>
      </div>
    );
  }
};

class Login extends React.Component {
  render() {
    var greet = {
      fontWeight: "lighter"
    }
    return(
      <div className="login">
        <h2 style={greet}>Silahkan Masuk</h2>
        <Inptxt/>
      </div>
    );
  }
};

class Inptxt extends React.Component {
  render() {
    var styleInp = {
      marginBottom: "20px",
      padding: "10px",
      border: "1px solid grey",
      width: "100%"
    }
    var styleButton = {
      width: "100%",
      padding: "10px",
      borderRadius: "10px",
      fontSize: "1.1rem",
      border: "none",
      backgroundColor: "#3AC4E7",
      color: "white"
    }
    return (
      <div>
        <input type="text" placeholder="Username" style={styleInp}/>
        <br/>
        <input type="password" placeholder="Password" style={styleInp}/>
        <button style={styleButton}>Masuk</button>
      </div>
    );
  }
};

class Onetxt extends React.Component {
  render() {
    var tengah = {
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
    var oneTxt = {fontSize: "4rem", fontWeight: "400"}
    var oneSecTxt = {fontSize: "1.5rem"}
    var travTxt = {color: "#3AC4E7"}
    return(
      <div style={tengah}>
        <h1 style={oneTxt}>One<span style={travTxt}>Travel</span></h1>
        <p style={oneSecTxt}>Life is a Journey</p>
      </div>
    );
  }
};

class OnetxtR extends React.Component {
  render() {
    var styleOnetxt = {
      textAlign: "center",
      marginTop: "130px",
      marginBottom: "80px",
      color: "grey",
      fontWeight: "400"
    }
    var travTxt = {color: "#3AC4E7"}
    return(
      <h1 style={styleOnetxt}>One<span style={travTxt}>Travel</span></h1>
    );
  }
};

class Layer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleLayer: {
        width: "100%",
        height: "100vh",
        backgroundColor: this.props.warna
      }
    }
  }
  render() {
    return(
      <div style={this.state.styleLayer}>{this.props.children}</div>
    );
  }
};

export default App;
