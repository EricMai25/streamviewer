import React from "react";
import styles from "../Css/Input.css";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.user) {
      this.props.add(this.state.message);
      this.setState({
        message: ""
      });
    } else {
      alert("Please Login to Start Chatting");
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="textInput"
            placeholder="Bla..."
            value={this.state.message}
            onChange={e => {
              this.setState({ message: e.target.value });
            }}
          />
          <button className="textButton" onClick={this.handleSubmit}>
            Send
          </button>
        </form>
      </div>
    );
  }
}
