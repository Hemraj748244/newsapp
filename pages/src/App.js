import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Router>
          <Navbar settings={this.handleSetting} />
          <Routes>
            <Route
              key="top"
              path="/"
              element={<News category="top" language="hi" />}
            />
            <Route
              key="business"
              path="/business"
              element={<News category="business" language="hi" />}
            />
            <Route
              key="entertainment"
              path="entertainment"
              element={<News category="entertainment" language="hi" />}
            />
            <Route
              key="environment"
              path="environment"
              element={<News category="environment" language="hi" />}
            />
            <Route
              key="food"
              path="/food"
              element={<News category="food" language="hi" />}
            />
            <Route
              key="health"
              path="/health"
              element={<News category="health" language="hi" />}
            />
            <Route
              key="politics"
              path="/politics"
              element={<News category="politics" language="hi" />}
            />
            <Route
              key="science"
              path="/science"
              element={<News category="science" language="hi" />}
            />
            <Route
              key="sports"
              path="/sports"
              element={<News category="sports" language="hi" />}
            />
            <Route
              key="technology"
              path="/technology"
              element={<News category="technology" language="hi" />}
            />
            <Route
              key="world"
              path="/world"
              element={<News category="world" language="hi" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
