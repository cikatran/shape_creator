import React, { Component } from 'react';
import { PanResponder, View } from 'react-native';

export default class GesturedBound extends Component {
  static defaultProps = {
    delay: 300,
    onDoubleTap: () => null,
    movable: true,
    scalable: true,
    minScale: 0.5,
    maxScale: 2
  };

  constructor(props) {
    super(props)
    this.state = {
      lastTap: null,
      scale: 1,
      lastScale: 1,
      offsetX: 0,
      offsetY: 0,
      lastX: 0,
      lastY: 0,
      lastMovePinch: false
    };
    this.distant = 150;
    this.gestureHandlers = PanResponder.create({
      onStartShouldSetPanResponder: evt => true,
      onMoveShouldSetPanResponder: this._onMoveShouldSetPanResponder,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove,
      onPanResponderRelease: this._onResponderRelease,
      onPanResponderTerminationRequest: evt => true,
      onShouldBlockNativeResponder: evt => false
    });
  }


  _onResponderRelease = (evt) => {
    const { onDoubleTap, delay } = this.props;
    const { lastTap } = this.state
    const now = Date.now();
    if (lastTap && (now - lastTap) < delay) {
      onDoubleTap();
    } else {
      this.setState({ lastTap: now })
    }
    this.setState({
      lastX: this.state.offsetX,
      lastY: this.state.offsetY,
      lastScale: this.state.scale
    });
  }

  _onMoveShouldSetPanResponder = (e, gestureState) => {
    return (
      this.props.scalable &&
      (Math.abs(gestureState.dx) > 2 ||
        Math.abs(gestureState.dy) > 2 ||
        gestureState.numberActiveTouches === 2)
    );
  };

  _onPanResponderGrant = (e, gestureState) => {
    if (gestureState.numberActiveTouches === 2) {
      let dx = Math.abs(
        e.nativeEvent.touches[0].pageX - e.nativeEvent.touches[1].pageX
      );
      let dy = Math.abs(
        e.nativeEvent.touches[0].pageY - e.nativeEvent.touches[1].pageY
      );
      let distant = Math.sqrt(dx * dx + dy * dy);
      this.distant = distant;
    }
  };

  _onPanResponderMove = (e, gestureState) => {
    // zoom
    if (gestureState.numberActiveTouches === 2) {
      let dx = Math.abs(
        e.nativeEvent.touches[0].pageX - e.nativeEvent.touches[1].pageX
      );
      let dy = Math.abs(
        e.nativeEvent.touches[0].pageY - e.nativeEvent.touches[1].pageY
      );
      let distant = Math.sqrt(dx * dx + dy * dy);
      let scale = (distant / this.distant) * this.state.lastScale;
      //check scale min to max
      if (scale < this.props.maxScale && scale > this.props.minScale) {
        this.setState({ scale, lastMovePinch: true });
      }
    }
    // translate
    else if (gestureState.numberActiveTouches === 1) {
      if (this.state.lastMovePinch) {
        gestureState.dx = 0;
        gestureState.dy = 0;
      }
      let offsetX = this.props.movable ? this.state.lastX + gestureState.dx / this.state.scale : 0;
      let offsetY = this.props.movable ? this.state.lastY + gestureState.dy / this.state.scale : 0;

      this.setState({ offsetX, offsetY, lastMovePinch: false });
    }
  };


  render() {
    return (
      <View
        {...this.gestureHandlers.panHandlers}
        style={[this.props.style, {
          transform: [
            { scaleX: this.state.scale },
            { scaleY: this.state.scale },
            { translateX: this.state.offsetX },
            { translateY: this.state.offsetY }
          ]
        }]}
      >
        {this.props.children}
      </View>
    );
  }
}