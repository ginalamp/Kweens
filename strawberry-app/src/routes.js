import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import MainPage from './views/MainPage/MainPage';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </Router>
    );
  }
}
