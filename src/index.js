import React, { Component } from "react";
import "./styles.css";

class Marquee extends Component {
  constructor(props) {
    super(props);
    this.dragSpan = React.createRef();
    this.scrollTimer = null;
    this.state = {
      left: window.innerWidth,
      isDraging: false
    };
  }

  componentDidMount() {
    this.initMarquee();
  }

  componentWillUnmount() {
    clearInterval(this.scrollTimer);
  }

  initMarquee() {
    const { freq = 15 } = this.props;
    let spanWidth = this.dragSpan.current.getBoundingClientRect().width;
    const windowWidth = window.innerWidth;
    this.spanWidth = Math.max(spanWidth, windowWidth);
    this.scrollTimer = setInterval(this.move, freq);
  }

  move = () => {
    const { offset = 1 } = this.props;
    let left = this.state.left - offset;
    if (left < -this.spanWidth) {
      left = window.innerWidth;
    }
    this.setState({ left });
  };

  handleMouseEnter = () => {
    clearInterval(this.scrollTimer);
  };

  handMouseLeave = () => {
    const { freq = 15 } = this.props;
    this.scrollTimer = setInterval(this.move, freq);
    this.setState({ isDraging: false });
  };

  handleDrag = e => {
    this.prePageX = this.currentPageX;
    this.currentPageX = e.pageX;
    const left = this.state.left + (this.currentPageX - this.prePageX);
    this.setState({ left });
  };

  handleMouseDown = e => {
    this.setState({ isDraging: true });
    this.prePageX = e.pageX;
    this.currentPageX = this.prePageX;
  };

  handleMouseUp = e => {
    this.setState({ isDraging: false });
  };

  render() {
    const { text = "" } = this.props;
    const handleDrag = this.state.isDraging ? this.handleDrag : null;
    return (
      <div
        className="marquee-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={handleDrag}
      >
        <div className="drag-span" style={{ left: this.state.left }}>
          <span ref={this.dragSpan}>{text}</span>
        </div>
      </div>
    );
  }
}

export default Marquee;
