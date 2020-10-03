// TODO - success page from report

import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import Strawberry from '../../assets/images/strawberry.png';

var backgroundStyle = {
  position: 'absolute',
  width: "100%",
  height: "100vh",
  backgroundImage: "url(" + Strawberry + ")"
};

class Success extends Component {

  render () {
    return (
        <section style={ backgroundStyle }>
            <div>

            </div>
        </section>
    )
  }
}

export default Success;
