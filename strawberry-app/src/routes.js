import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import MainPage from './views/MainPage/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Settings from './views/SettingsPage/Settings';
import Report from './views/ReportPage/Report';
import Success from './views/ReportPage/Success';
import Chat from './views/Chat/Chat';
import HelpPage from './views/HelpPage/HelpPage';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/report' component={Report} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/help' component={HelpPage} />
          <Route exact path='/chat' component={Chat} />

        </Switch>
        <Footer />
      </Router>
    );
  }
}
