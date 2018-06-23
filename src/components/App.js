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
        @keyframes example {
          0%   { left:200px; opacity: 0,width:0% }
          25%  { left:-200px; opacity: 0.25,width:0% }
          100% { left:0px; opacity: 1,width:100 %}
        }
          #slider-container{
            width:100%;
            height:100%;
            position:absolute;
            animation-name: example;
            animation-duration: 1s;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
