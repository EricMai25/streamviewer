import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gConfig } from "../source.js";
import styles from "./Css/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  render() {
    return (
      <ul>
        <div className="grid">
          <li>
            <a>Home</a>
          </li>
        </div>
        <div className="grid">
          <li className="siteName">
            <p>Top Streamer</p>
          </li>
        </div>

        <div className="grid">
          <div className="login">
            {this.props.user === null ? (
              <div>
                <GoogleLogin
                  clientId={gConfig}
                  icon="true"
                  buttonText="Login"
                  onSuccess={this.props.gRes}
                  onFailure={console.log("closed")}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            ) : (
              <div>
                <a>
                  <img className="userImage" src={this.props.user.imageUrl} />
                  <div className="name">{this.props.user.name}</div>
                </a>
                <a className="logged">
                  <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={this.props.glogout}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </ul>
    );
  }
}

export default Nav;
