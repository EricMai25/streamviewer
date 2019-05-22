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
      video: [{id:{videoId : "hHW1oY26kxQ"},snippet :{user : "something" , description : 'something'}}],
      messages: [],
      user: null
    };
  }

  componentDidMount() {
      this.getFirebase()
    // fetch("/video", {
    //   method: "GET",
    //   headers: { "Content-type": "application/json" }
    // })
    //   .then(data => {
    //     return data.json();
    //   })
    //   .then(videodata => {
    //     this.setState({
    //       video: videodata.items
    //     });
    //     this.getFirebase()
    //   })
    //   .catch(error=>{
    //       console.log(error)
    //   })
  }
  getFirebase(){
    let dataMessage = database
    .ref(this.state.video[0].id.videoId)
    .limitToLast(100);

    dataMessage.on("value", snapshot => {
      let collection = Object.values(snapshot.val()).reverse();

      this.setState({
        messages: collection
      });
    });
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
    database
      .ref(this.state.video[0].id.videoId)
      .push({ user: this.state.user, msg: message });
  }

  render() {
    return (
      <div>
        <div className="Nav">
          <Nav
            gRes={this.responseGoogle.bind(this)}
            glogout={this.googleLogout.bind(this)}
            user={this.state.user}
          />
        </div>
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
