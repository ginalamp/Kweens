import React, { Component } from 'react';
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

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

    var joined = this.state.messages.concat({text: text, index: this.state.messages.length});
    this.setState({ messages: joined })
  }


  render() {
    return (
      <div className="chat_app">
        {/* <ChatBubble messages = {this.state.messages} /> */}

        <MessageList
          messages={this.state.messages} />
        <SendMessageForm
          sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default Chat;
