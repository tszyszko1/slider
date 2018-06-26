import React, { Component } from "react";
import Member from "./Member";
import MemberSlide from "./MemberSlide";
import Slider from "./Slider";
import "../App.css";
import members from "../data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSlider: false,
      memberIndex: 0
    };
    this.toggleSlider = this.toggleSlider.bind(this);
  }

  toggleSlider = i => () =>
    this.setState({ showSlider: !this.state.showSlider, memberIndex: i });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="color-main App-title">Meet our team</h1>
        </header>
        <div className="member-list">
          {members.map((m, i) => (
            <Member {...m} onClick={this.toggleSlider(i)} key={m.name} />
          ))}
          {this.state.showSlider && (
            <div id="slider-container">
              <Slider
                onClose={this.toggleSlider()}
                startIndex={this.state.memberIndex}
              >
                {members.map(m => <MemberSlide {...m} key={m.name} />)}
              </Slider>
            </div>
          )}
        </div>
        <style>{`
          @keyframes slideIn {
            0%   { left:200px; opacity: 0 }
            100% { left:0px; opacity: 1 }
          }
          #slider-container{
            width:100%;
            height:100%;
            position:absolute;
            animation-name: slideIn;
            animation-duration: 1s;
          }
          .App {
            margin-top:5vw;
            text-align: center;
          }
          
          .App-title{
            font-weight:300;
            margin-bottom:60px;
          }

          .icon-mail{
            position:absolute;
            right:15px;
            top:15px;
            border-radius:50%;
            color:white;
            background:var(--main-color);
            width:30px;
            height:30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .icon-inside{
            padding-bottom:2px;
          }

          .member-list{
            display:flex;
            justify-content:center;
            max-width:700px;
            flex-wrap:wrap;
            margin:auto;
            position:relative;
          }
          
          .member{
            max-width:100px;
            padding:20px;
            position:relative;
          }
          
          .member:hover{
            cursor:pointer;
            background:rgba(194, 236, 254, 0.5);
          }
          
          .member-image{
            max-width:100%;
            border-radius: 50%;
            filter:sepia(100%) contrast(30%) brightness(110%) hue-rotate(172deg) saturate(1000%)
          }
          
          .member-name{
            margin: auto;
            margin-top: 5px;
            font-weight:300;
          }
          
          .member-location{
            margin: auto;
            margin-top: 5px;
            font-size:11px;
          }
          
          .member-position{
            margin: auto;
            margin-top: 5px;
            font-size:11px;
          
          }
        `}</style>
      </div>
    );
  }
}

export default App;
