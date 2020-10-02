import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Strawberry from '../../assets/images/strawberry.png';
import StrawberryIcon from '../../assets/images/strawberry_icon.png';

var backgroundStyle = {
  position: 'absolute',
  width: "100%",
  height: "100vh",
  backgroundImage: "url(" + Strawberry + ")"
};

class MainPage extends Component {
  render () {
    return (
      <section style={ backgroundStyle }>
        <div className="main">
          <Container>
            <Row >
              <Col>
                <img
                  className="center"
                  src={StrawberryIcon}
                  alt="strawberry"
                  loading="meep"
                  height="700"
                  />
              </Col>
              <Col>
                <h3>Hello</h3>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}

export default MainPage;
