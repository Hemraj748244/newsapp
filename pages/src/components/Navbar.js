import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'top',
      lang: 'hi',
    };
  }

  handleChange = (e) => {
    this.setState({ lang: e.target.value });
    console.log('Changed');
    console.log(this.state.lang);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Apna Samachar
          </a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  onClick={this.setState({ type: 'top' })}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'business' })}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'entertainment' })}
                >
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'environment' })}
                >
                  Environment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'food' })}
                >
                  Food
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'health' })}
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'politics' })}
                >
                  Politics
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'science' })}
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'sports' })}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'technology' })}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={this.setState({ type: 'world' })}
                >
                  World
                </a>
              </li>
              <li className="nav-item dropdown justify-content-right">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => this.handleChange(event)}
                >
                  <option>en-English</option>
                  <option>hi-Hindi</option>
                  <option>de-France</option>
                  <option>ge-German</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
