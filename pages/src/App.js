import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Switch>
            <Route key="top" exact path="/">
              <News category="top" language="hi" />
            </Route>
            <Route key="business" exact path="/business">
              <News category="business" language="hi" />
            </Route>
            <Route key="entertainment" exact path="/entertainment">
              <News category="entertainment" language="hi" />
            </Route>
            <Route key="environment" exact path="/environment">
              <News category="environment" language="hi" />
            </Route>
            <Route key="food" exact path="/food">
              <News category="food" language="hi" />
            </Route>
            <Route key="health" exact path="/health">
              <News category="health" language="hi" />
            </Route>
            <Route key="politics" exact path="/politics">
              <News category="politics" language="hi" />
            </Route>
            <Route key="science" exact path="/science">
              <News category="science" language="hi" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
