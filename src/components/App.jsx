import React from "react";
import Chat from "./Chatbox.jsx";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      messages: [],
      username: "",
      icon: ""
    };
  }

  componentDidMount() {
    fetch("/video", {
      method: "GET",
      headers: { "Content-type": "application/json" }
    })
      .then(data => {
        return data.json();
      })
      .then(videodata => {
        this.setState({
          video: videodata.items[0].id.videoId
        });
      });
  }
  responseGoogle(response) {
    console.log(response);
  }
  addMessage(message) {
    let mbox = this.state.messages;
    let totalmessage = mbox.push(message);
    this.setState({
      messages: totalmessage
    });
    console.log(this.state.messages);
  }

  render() {
    return (
      <div>
        <Nav gRes={this.responseGoogle.bind(this)} />
        <Home video={this.state.video} />
        <Chat msgs={this.state.messages} add={this.addMessage.bind(this)} />
      </div>
    );
  }
}

export default App;
