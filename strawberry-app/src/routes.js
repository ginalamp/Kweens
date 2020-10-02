import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import MainPage from './views/MainPage/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
