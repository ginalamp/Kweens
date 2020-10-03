import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import './Chat.css';

class MessageList extends React.Component {
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this);
        this.shouldScrollBottom = node.scrollTop + node.clientHeight + 50 >= node.scrollHeight;
    }

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            const node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight
        }
    }
        
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map(message => {
                    return <Message
                        key={message.index}
                        user={"Anonymous"}
                        text={message.text}
                    /> 
                })}
            </div>
        )
    }
}

export default MessageList