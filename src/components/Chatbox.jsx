import React from "react";
import Input from "./chatComponents/Input.jsx";
import Message from "./chatComponents/Message.jsx";
import styles from "./Css/Chatbox.css";


class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="roomTitle">Chat Room</div>
        <div className="allMes">
          {console.log(this.props.msgs)}
          {this.props.msgs.map(item => {
            return <Message msg={item} />;
          })}
        </div>
        <div className='chatInput'>
          <Input add={this.props.add} user={this.props.user} />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
