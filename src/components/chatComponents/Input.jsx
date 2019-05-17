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
              console.log(this.state.message);
            }}
          />
          <button
            onClick={() => {
              this.props.add(this.state.message);
            }}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
