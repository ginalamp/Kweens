import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import Strawberry from '../../assets/images/strawberry.png';
import StrawberryIcon from '../../assets/images/strawberry_icon.png';

var backgroundStyle = {
  position: 'absolute',
  width: "100%",
  height: "100vh",
  backgroundImage: "url(" + Strawberry + ")"
};

class MainPage extends Component {

  submitFailGame = event => {
    alert("ERROR: Something seems to have gone wrong.")
  }

  render () {
    return (
      <section style={ backgroundStyle }>
        <div className="main">
          <Container>
            <Row className='align-items-center'>
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
                <div className='card shadow p-3 mb-5  bg-white rounded'>
                  <form>
                    <h3>Click a Strawberry!</h3>

                    <div className='form-group' id='right'>
                      <label>Happiness is just a click away!</label>
                    </div>

                    <Button
                      id='bookingBtn'
                      className='btn btn-danger btn-block'
                      onClick={this.submitFailGame}
                    >
                      Start a New Game
                    </Button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}

export default MainPage;
