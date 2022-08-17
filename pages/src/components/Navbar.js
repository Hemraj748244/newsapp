import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'top',
      lang: 'hi',
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Apna Samachar</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    this.setState({ type: 'top' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'business' });
                    this.props.settings(this.state.type, this.state.lang);
                    console.log(this.state.type + this.state.lang);
                  }}
                >
                  Business
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'entertainment' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Entertainment
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'environment' });
                    this.props.settings(this.state.type, this.state.lang);
                    console.log(this.state.type + this.state.lang);
                  }}
                >
                  Environment
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'food' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Food
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'health' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Health
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'politics' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Politics
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'science' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Science
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'sports' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Sports
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'technology' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Technology
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'world' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  World
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
