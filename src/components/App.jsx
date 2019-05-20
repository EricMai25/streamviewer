import React from "react";
import Chat from "./Chatbox.jsx";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import { database } from "./database/Firebase";
import styles from "./Css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      messages: [],
      user: null
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
        console.log("hello there");
        this.setState({
          video: "hHW1oY26kxQ"
        });
      });

    //videodata.items[0].id.videoId
    var dataMessage = database.ref("hHW1oY26kxQ").limitToLast(10);

    // dataMessage.on("value", snapshot => {
    //   let collection = Object.values(snapshot.val());

    //   this.setState({
    //     messages: collection
    //   });
    // });
  }
  responseGoogle(response) {
    let profile = response.profileObj;
    this.setState({
      user: profile
    });
  }

  googleLogout() {
    this.setState({
      user: null
    });
  }

  onAddMessage(message) {
    console.log("sent");
    // database
    //   .ref(this.state.video)
    //   .push({ user: this.state.user, msg: message });
  }

  render() {
    return (
      <div>
        <Nav
          gRes={this.responseGoogle.bind(this)}
          glogout={this.googleLogout.bind(this)}
          user={this.state.user}
        />
        <div className="gridBase">
          <div className="gridApp">
            <Home video={this.state.video} />
          </div>
          <div className="gridApp">
            <Chat
              user={this.state.user}
              msgs={this.state.messages}
              add={this.onAddMessage.bind(this)}
              video={this.state.video}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
