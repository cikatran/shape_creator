import React, { PureComponent } from 'react';
import { Shape, Path, Group } from '@react-native-community/art';



export default class Circle extends PureComponent {
  render() {
    const { size, x, y, fill } = this.props
    return (
      <ImageBackground source={{ uri: fill }} style={{
        height: size,
        width: size,
        position: 'absolute',
        top: y - size / 2,
        left: x - size / 2
      }} />
    )
  }
}