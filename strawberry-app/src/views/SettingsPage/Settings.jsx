import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link} from "react-router-dom";
import history from '../../history';

import Strawberry from '../../assets/images/strawberry.png';

var backgroundStyle = {
  position: 'absolute',
  width: "100%",
  height: "100vh",
  backgroundImage: "url(" + Strawberry + ")"
};

class Settings extends Component {

  toChat = (event) => {
    history.push({
      pathname: '/chat',
      state: {
      }
    })
  }

  toReport = (event) => {
    history.push({
      pathname: '/report',
      state: {
      }
    })
  }

  toHelp = (event) => {
    history.push({
      pathname: '/help',
      state: {
      }
    })
  }

  render () {
    return (
      <section style={ backgroundStyle }>
        <div className="settings">
          <br></br>
          <br></br>
          <Container>
            <Row className='align-items-center'>
              <Col>
                <div className='card shadow p-3 mb-5  bg-white rounded'>
                <form>
                  <h3>Settings</h3>

                  <div className='form-group' id='right'>
                    <label>Please choose the manner of your happiness.</label>
                    <br></br>

                  </div>

                  <Button
                    className="button_chat btn-block"
                    variant="danger"
                    onClick={this.toChat}
                    >
                    Chat
                  </Button>
                  <br></br>
                  <Button
                    className="button_report btn-block"
                    variant="danger"
                    onClick={this.toReport}
                    >
                    Report
                  </Button>
                  <br></br>
                  <Button
                    className="button_help btn-block"
                    variant="danger"
                    onClick={this.toHelp}
                    >
                    Self Help
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

export default Settings;
