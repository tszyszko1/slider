import React, { Component } from "react";
import backgroundImage from "../img/bg-slide.jpg";
class MemberSlide extends Component {
  render() {
    const { name, position } = this.props;
    return (
      <div className="member-slide">
        <div className="member-slide-info">
          <span className="member-slide-info-position">{position}</span>
          <span className="member-slide-info-name">{name}</span>
        </div>
        <style>
        {`
            .member-slide{
                background:url(${backgroundImage});
                background-size:cover;
                height:100%;
                color:white;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .member-slide-info{
                width:66%;
                height:33%;
                border: 1px dashed white;
                margin:auto;
                text-align:center;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .member-slide-info-position{
                font-size:15px;
                margin:5px;
            }
            .member-slide-info-name{
                font-size:30px;
                font-weight:600;
                margin:5px;
            }
        `}
        </style>
      </div>
    );
  }
}

export default MemberSlide;
