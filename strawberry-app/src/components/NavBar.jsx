import React, { Component } from 'react';
import './navbar.css';
import StrawberryIcon from '../assets/images/strawberry_icon.png';
import { Container, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import history from '../history';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">
          <font size="+3">Click a Strawberry</font>
        </a>
        <a className="strawberry" href="/settings">
          <img
            className="d-inline-block align-top"
            src={StrawberryIcon}
            width="40"
            height="45"
            alt=""
            loading="lazy" />
        </a>
      </nav>
    );
  }
}

export default NavBar;
