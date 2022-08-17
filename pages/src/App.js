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

  render() {
    return (
      <div>
        <Navbar
          settings={(cate, lang) => {
            this.setState({
              category: cate,
              language: lang,
            });
          }}
        />
        <News category="top" language="hi" />
      </div>
    );
  }
}
