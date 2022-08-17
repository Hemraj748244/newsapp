import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: 'top',
      language: 'en',
    };
  }
  handleSetting = (cate, lang) => {
    this.setState({
      category: cate,
      language: lang,
    });
  };
  render() {
    return (
      <div>
        <Navbar settings={this.handleSetting} />
        <News category="top" language="hi" />
      </div>
    );
  }
}
