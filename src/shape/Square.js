import React, { PureComponent, Component } from 'react';
import { View, Image } from 'react-native';

export default class Square extends PureComponent {

  render() {
    const { size, x, y, fill } = this.props
    let backgroundColor = 'transparent'
    if (fill.startsWith('rgb')) {
      backgroundColor = fill
    }
    return (
      <View style={{
        height: size,
        width: size,
        position: 'absolute',
        top: y - size / 2,
        left: x - size / 2,
        backgroundColor: backgroundColor
      }}>
        <Image source={{ uri: fill }} style={{
          height: size,
          width: size,
          position: 'absolute',
          top: y - size / 2,
          left: x - size / 2,
        }} />
      </View>

    )
  }
}

