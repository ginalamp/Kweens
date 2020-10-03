import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import ReactPlayer from "react-player";

import Strawberry from '../../assets/images/strawberry.png';

var backgroundStyle = {
  position: 'absolute',
  width: "100%",
  height: "100vh",
  backgroundImage: "url(" + Strawberry + ")"
};

class HelpPage extends Component {

  render () {
    return (
      <section style={ backgroundStyle }>
        <div className="help">
          <br></br>
          <Container>
            <Row className='align-items-center'>
              <Col>
                <div className='card shadow p-3 mb-5  bg-white rounded'>
                  <form>
                    <h3>Helplines</h3>
                    <Row>
                      <Col>
                        <ReactPlayer
                          width="80%"
                          height="50%"
                          url="https://www.youtube.com/watch?v=K_CCA7KAou4"
                          />
                      </Col>
                      <Col>
                        <ReactPlayer
                          url="https://www.youtube.com/watch?v=K_CCA7KAou4"
                          />
                      </Col>
                    </Row>
                    <h5>In general</h5>
                    <a
                      className="for_women"
                      href="https://www.for-women.co.za/help-line">
                      For Women
                    </a>
                    <br></br>
                    <a
                      className="help_guide"
                      href="https://www.helpguide.org/articles/abuse/getting-out-of-an-abusive-relationship.htm">
                      Help Guide
                    </a>
                    <br></br>
                    <br></br>
                    <h5>Mental wellbeing</h5>
                    <a
                      className="sadag"
                      href="http://www.sadag.org/index.php?option=com_content&view=article&id=11&Itemid=114">
                      The South African Depression and Anxiety Group
                    </a>
                    <br></br>
                    <a
                      className="bb"
                      href="https://www.beyondblue.org.au/who-does-it-affect/women">
                      Beyond Blue
                    </a>
                    <br></br>
                    <br></br>
                    <h5>Domestic Abuse</h5>
                    <a
                      className="nad"
                      href="https://www.nationaldahelpline.org.uk/">
                      National Domestic Abuse Helpline
                    </a>
                    <br></br>
                    <a
                      className="powa"
                      href="https://www.powa.co.za/POWA/">
                      POWA
                    </a>
                    <br></br>
                    <br></br>
                    <h5>Police</h5>
                    <a
                      className="saps"
                      href="https://www.saps.gov.za/resource_centre/women_children/women_children.php">
                      SAPS
                    </a>
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

export default HelpPage;
