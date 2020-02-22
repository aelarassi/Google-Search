import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <a href="#link">Advertising</a>
          <a href="#link">Business</a>
          <a href="#link">About</a>
        </div>
        <a href="https://aelarassi.com" className="copyright">
          aelarassi.com
        </a>
        <div>
          <a href="#link">Privacy</a>
          <a href="#link">Tearms</a>
          <a href="#link">Setting</a>
        </div>
      </div>
    );
  }
}

export default Footer;
