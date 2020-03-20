import React, { PureComponent, Component } from 'react';
import { ImageBackground, Image } from 'react-native';

export default class Square extends PureComponent {

  render() {
    const { size, x, y, fill } = this.props
    return (
      <Image source={{ uri: fill }} style={{
        height: size,
        width: size,
        position: 'absolute',
        top: y - size / 2,
        left: x - size / 2,
        backgroundColor: fill
      }} />
    )
  }
}

