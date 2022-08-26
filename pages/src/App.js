import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import News2 from './components/News2';
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  apiKey = process.env.REACT_APP_MY_API_KEY;
  constructor() {
    super();
    this.state = {
      language: 'hi',
      progress: 10,
    };
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  setLanguage = (lang) => {
    this.setState({
      language: lang,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar setLang={this.setLanguage} />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              key="top"
              path="/"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="top"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="business"
              path="/business"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="business"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="entertainment"
              path="entertainment"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="entertainment"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="environment"
              path="environment"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="environment"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="food"
              path="/food"
              element={<News2 category="food" language={this.state.language} />}
            />
            <Route
              key="health"
              path="/health"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="health"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="politics"
              path="/politics"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="politics"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="science"
              path="/science"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="science"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="sports"
              path="/sports"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="sports"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="technology"
              path="/technology"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="technology"
                  language={this.state.language}
                />
              }
            />
            <Route
              key="world"
              path="/world"
              element={
                <News2
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  category="world"
                  language={this.state.language}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
