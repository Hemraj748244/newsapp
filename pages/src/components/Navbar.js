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
                <link
                  to="/"
                  className="nav-link active"
                  onClick={() => {
                    this.setState({ type: 'top' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Top Headlines
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/business"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'business' });
                    this.props.settings(this.state.type, this.state.lang);
                    console.log(this.state.type + this.state.lang);
                  }}
                >
                  Business
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/entertainment"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'entertainment' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Entertainment
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/environment"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'environment' });
                    this.props.settings(this.state.type, this.state.lang);
                    console.log(this.state.type + this.state.lang);
                  }}
                >
                  Environment
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/food"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'food' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Food
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/health"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'health' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Health
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/politics"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'politics' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Politics
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/science"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'science' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Science
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/sports"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'sports' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Sports
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/technology"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'technology' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  Technology
                </link>
              </li>
              <li className="nav-item">
                <link
                  to="/world"
                  className="nav-link"
                  onClick={() => {
                    this.setState({ type: 'world' });
                    this.props.settings(this.state.type, this.state.lang);
                  }}
                >
                  World
                </link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
