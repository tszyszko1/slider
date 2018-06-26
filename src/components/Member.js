import React, { Component } from "react";

class Member extends Component {
  render() {
    const { image, location, name, onClick, position } = this.props;
    return (
      <div className="member" onClick={onClick}>
        <img className="member-image" src={image} alt="" />
        <h5 className="member-name color-main">{name}</h5>
        <p className="member-position color-secondary">{position}</p>
        <p className="member-location color-main">{location}</p>
        <div className="icon-mail">
          <div className="icon-inside">&#x2709;</div>
        </div>
      </div>
    );
  }
}

export default Member;
