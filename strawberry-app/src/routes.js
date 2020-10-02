import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import MainPage from './views/MainPage/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Settings from './views/SettingsPage/Settings';
import Report from './views/ReportPage/Report';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/report' component={Report} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
