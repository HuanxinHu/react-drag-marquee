import React, { Component } from "react";
import "./styles.css";

class Marquee extends Component {
  constructor(props) {
    super(props);

    this.move = () => {
      const { offset = 1 } = this.props;
      let left = this.state.left - offset;
      if (left < -this.spanWidth) {
        left = window.innerWidth;
      }
      this.setState({ left });
    };

    this.handleMouseEnter = () => {
      clearInterval(this.scrollTimer);
    };

    this.handMouseLeave = () => {
      const { freq = 15 } = this.props;
      this.scrollTimer = setInterval(this.move, freq);
      this.setState({ isDraging: false });
    };

    this.handleDrag = e => {
      this.prePageX = this.currentPageX;
      this.currentPageX = e.pageX;
      const left = this.state.left + (this.currentPageX - this.prePageX);
      this.setState({ left });
    };

    this.handleMouseDown = e => {
      this.setState({ isDraging: true });
      this.prePageX = e.pageX;
      this.currentPageX = this.prePageX;
    };

    this.handleMouseUp = e => {
      this.setState({ isDraging: false });
    };

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

  render() {
    const { text = "" } = this.props;
    const handleDrag = this.state.isDraging ? this.handleDrag : null;
    return React.createElement(
      "div",
      {
        className: "marquee-container",
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handMouseLeave,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseMove: handleDrag
      },
      React.createElement(
        "div",
        { className: "drag-span", style: { left: this.state.left } },
        React.createElement(
          "span",
          { ref: this.dragSpan },
          text
        )
      )
    );
  }
}

export default Marquee;