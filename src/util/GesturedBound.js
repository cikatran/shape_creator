import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

export default class GesturedBound extends Component {
  static defaultProps = {
    delay: 300,
    onDoubleTap: () => null,
  };

  constructor(props) {
    super(props)
    this.state = {
      lastTap: null,
    };
  }

  onResponderRelease = (evt) => {
    const { onDoubleTap, delay } = this.props;
    const { lastTap } = this.state
    const now = Date.now();
    if (lastTap && (now - lastTap) < delay) {
      onDoubleTap();
    } else {
      this.setState({ lastTap: now })
    }
  }

  render() {
    return (
      <View
        style={this.props.style}
        onStartShouldSetResponder={() => true}
        onResponderRelease={this.onResponderRelease}
      >
        {this.props.children}
      </View>
    );
  }
}