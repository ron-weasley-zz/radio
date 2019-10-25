import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Radio from './containers/Radio/Radio';
import What from './containers/What/What';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Switch>
          <Route path="/what-is-it" component={What} />
          <Route path="/" exact component={Radio} />
        </Switch>
      </div>
    );
  }
}

export default App;
