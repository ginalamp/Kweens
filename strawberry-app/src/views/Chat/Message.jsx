import React from 'react'
import './Message.css';

class Message extends React.Component {
    render() {
        return (
            <div className="bubble">
                <div className="message-username">Anonymous</div>
                <div className="message-username">{this.props.text}</div>
            </div>
        )
    }
}

export default Message