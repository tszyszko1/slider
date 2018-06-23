import React, { Component } from "react";

const findClosestValueInArray = (arr,val)=>{
    let ret = arr[0]
    for(let i=1;i<arr.length;i+=1){
        if(Math.abs(ret-val)>Math.abs(arr[i]-val)) ret = arr[i]
    }
    return ret
}



class Slider extends Component {
  constructor(props) {      
    super();
    this.state = {
      dragging: false,
      xStart: null,
      offsetStart: null,
      offset: 0,
    };
    this.sliderRef = React.createRef();
    this.ccRef = React.createRef();
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragStart = this.onDragStart.bind(this);    
  }
  componentDidMount(){
      if(this.props.startIndex){          
          this.setState({offset:-this.sliderRef.current.getBoundingClientRect().width*this.props.startIndex})
      }
  }

  onDragStart(e) {
    this.setState({
      dragging: true,
      xStart: e.clientX,
      offsetStart: this.state.offset
    });
    e.preventDefault();
  }
  onDragEnd() {
    const childWidth = this.sliderRef.current.getBoundingClientRect().width
    const borderPoints = this.props.children.map((c,i)=>-i*childWidth)
    const offset = findClosestValueInArray(borderPoints,this.state.offset)    
    this.setState({
      dragging: false,
      xStart: null,
      offsetStart:null,
      offset
    });
  }
  onMouseMove = e => {
    const minOffset =
      this.sliderRef.current.getBoundingClientRect().width -
      this.ccRef.current.getBoundingClientRect().width;
    const offset = Math.max(
      Math.min(this.state.offsetStart + (e.clientX - this.state.xStart)*3, 0),
      minOffset
    );
    this.setState({
      offset
    });
  };
  render() {
    const onMouseMove = this.state.dragging ? this.onMouseMove : null;
    return (
      <React.Fragment>
        <div className="slider" ref={this.sliderRef}>
          <div
            className="children-container"
            onMouseDown={this.onDragStart}
            onMouseMove={onMouseMove}
            onMouseUp={this.onDragEnd}
            ref={this.ccRef}
          >
            {this.props.children &&
              this.props.children.map((c, i) => (
                <div className="slide" key={i}>
                  {c}
                </div>
              ))}
          </div>
          <i className="icon-close" onClick={this.props.onClose}>
            &times;
          </i>
        </div>
        <style>{`
                .children-container{
                    height:100%;
                    width:${this.props.children.length}00%;
                    position:absolute;
                    left:${this.state.offset}px;
                }
                .slider{
                    width:100%;
                    height:100%;
                    position:relative;
                    overflow:hidden;
                }
                .slide{
                    width:${100 / this.props.children.length}%;
                    height:100%;
                    display:inline-block;
                }
                .icon-close{
                    cursor:pointer;
                    position:absolute;
                    right:10px;
                    top:0px;
                    font-size:60px;
                    color:white;
                    font-weight:600;
                }
            `}</style>
      </React.Fragment>
    );
  }
}

export default Slider;
