import React, { Component } from "react";
import { ReactSVG } from "react-svg";

import Magnify from "../../Assets/Images/magnify.svg";
import Microphone from "../../Assets/Images/microphone.svg";

class FormSearch extends Component {
  render() {
    return (
      <div className="search">
        <ReactSVG src={Magnify} />
        <input type="text" placeholder="Search.." autoFocus />
        <ReactSVG src={Microphone} />
      </div>
    );
  }
}

export default FormSearch;
