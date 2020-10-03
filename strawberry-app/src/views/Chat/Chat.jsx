import { Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import './Chat.css';

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }


  sendMessage(text) {
    console.log("message sent", text);

    var joined = this.state.messages.concat({
      text: text,
      index: this.state.messages.length
    });
    this.setState({ messages: joined })
  }


  render() {
    return (
      <div className="chat">
        {/* <Container> */}
          {/* <div className="card shadow p-3 mb-5 mt-5 bg-white rounded"> */}
          {/* <Row>
            <Col> */}
              <MessageList
                messages={this.state.messages} />
            {/* </Col>
          </Row> */}
          {/* <Row>
            <Col> */}
            <SendMessageForm
              sendMessage={this.sendMessage} />
            {/* </Col>
          </Row> */}
          {/* </div> */}
        {/* </ Container> */}
      </div>
    );
  }
}

export default Chat;
