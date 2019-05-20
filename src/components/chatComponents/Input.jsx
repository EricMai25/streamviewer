import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <input
            onChange={e => {
              this.setState({ message: e.target.value });
            }}
          />
          <button
            onClick={() => {
              if (this.props.user) {
                this.props.add(this.state.message);
              }else{
                  alert('Please Login to Start Chatting')
              }
            }}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
