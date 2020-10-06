import React from "react";

class NavBar extends React.Component {
  render() {
    const myStyle = {
      width: "auto",
    };

    return (
      <div className="ui menu">
        <a className="header item">FAT STAXX, LLC.</a>
        <div className="right menu">
          <a className="ui item">TOURNEY</a>
          <a className="ui item">HOW IT WORKS</a>
          <a className="ui item">DON'T SUCK</a>
        </div>
      </div>
    );
  }
}

export default NavBar;