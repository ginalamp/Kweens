import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link} from "react-router-dom";

import Strawberry from '../../assets/images/strawberry.png';

var backgroundStyle = {
  position: 'absolute',
  width: "100%",
  height: "100vh",
  backgroundImage: "url(" + Strawberry + ")"
};

class Settings extends Component {
  render () {
    return (
      <section style={ backgroundStyle }>
        <div className="settings">
          <Container>
            <Row>
              <Col>
                <Link to={"/report"}>
                  <Button
                    variant="danger"
                    >
                    Report
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}

export default Settings;
