import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import KEY from "../../configs/config.json";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  render() {
    return (
      <div>
        {this.props.user === null ?
          <GoogleLogin
            clientId={KEY.web.client_id}
            icon="true"
            buttonText="Login"
            onSuccess={this.props.gRes}
            onFailure={this.props.gRes}
            cookiePolicy={"single_host_origin"}
          />
         
        : 
        <div>
            <div>{this.props.user.name}</div>
            <img src={this.props.user.imageUrl} alt="Smiley face"/>
          <GoogleLogout buttonText="Logout" onLogoutSuccess={this.props.glogout} />
        </div>
        }
      </div>
    );
  }
}

export default Nav;
