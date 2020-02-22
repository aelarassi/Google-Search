import React, { Component } from "react";
import { ReactSVG } from "react-svg";

import Profile from "../../Assets/Images/profile.svg";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="account">
        <ReactSVG className="avatar" src={Profile} />
        <span className="notification">4</span>
      </div>
    );
  }
}

export default ProfileInfo;
