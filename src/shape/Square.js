import React, { PureComponent, Component } from 'react';
import { View, Image } from 'react-native';
import GesturedBound from '../util/GesturedBound';

export default class Square extends PureComponent {

  render() {
    const { size, x, y, fill } = this.props
    if (fill.startsWith('rgb')) {
      return (
        <GesturedBound
          onDoubleTap={this.props.onDoubleTap}
          style={{
            height: size,
            width: size,
            position: 'absolute',
            top: y - size / 2,
            left: x - size / 2,
            backgroundColor: fill
          }} />
      )
    } else {
      return (
        <GesturedBound
          onDoubleTap={this.props.onDoubleTap}
          style={{
            height: size,
            width: size,
            position: 'absolute',
            top: y - size / 2,
            left: x - size / 2,
          }}>
          <Image source={{ uri: fill }} style={{
            height: size,
            width: size,
          }} />
        </GesturedBound>

      )
    }
  }
}

