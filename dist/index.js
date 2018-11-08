'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Marquee = function (_Component) {
  _inherits(Marquee, _Component);

  function Marquee(props) {
    _classCallCheck(this, Marquee);

    var _this = _possibleConstructorReturn(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).call(this, props));

    _this.dragSpan = _react2.default.createRef();
    _this.scrollTimer = null;
    _this.move = _this.move.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handMouseLeave = _this.handMouseLeave.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleDrag = _this.handleDrag.bind(_this);
    _this.state = {
      left: window.innerWidth,
      isDraging: false
    };
    return _this;
  }

  _createClass(Marquee, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initMarquee();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.scrollTimer);
    }
  }, {
    key: 'initMarquee',
    value: function initMarquee() {
      var _props$freq = this.props.freq,
          freq = _props$freq === undefined ? 25 : _props$freq;

      var spanWidth = this.dragSpan.current.getBoundingClientRect().width;
      var windowWidth = window.innerWidth;
      this.spanWidth = Math.max(spanWidth, windowWidth);
      this.scrollTimer = setInterval(this.move, freq);
    }
  }, {
    key: 'move',
    value: function move() {
      var _props$offset = this.props.offset,
          offset = _props$offset === undefined ? 3 : _props$offset;

      var left = this.state.left - offset;
      if (left < -this.spanWidth) {
        left = window.innerWidth;
      }
      this.setState({ left: left });
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      clearInterval(this.scrollTimer);
    }
  }, {
    key: 'handMouseLeave',
    value: function handMouseLeave() {
      var _props$freq2 = this.props.freq,
          freq = _props$freq2 === undefined ? 25 : _props$freq2;

      this.scrollTimer = setInterval(this.move, freq);
      this.setState({ isDraging: false });
    }
  }, {
    key: 'handleDrag',
    value: function handleDrag(e) {
      this.prePageX = this.currentPageX;
      this.currentPageX = e.pageX;
      var left = this.state.left + (this.currentPageX - this.prePageX);
      this.setState({ left: left });
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this.setState({ isDraging: true });
      this.prePageX = e.pageX;
      this.currentPageX = this.prePageX;
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(e) {
      this.setState({ isDraging: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var text = this.props.text;

      var handleDrag = this.state.isDraging ? this.handleDrag : null;
      return _react2.default.createElement(
        'div',
        { className: 'marquee-container',
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handMouseLeave,
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onMouseMove: handleDrag
        },
        _react2.default.createElement(
          'div',
          { className: 'drag-span', style: { left: this.state.left } },
          _react2.default.createElement(
            'span',
            { ref: this.dragSpan },
            text
          )
        )
      );
    }
  }]);

  return Marquee;
}(_react.Component);

exports.default = Marquee;