import React, { PureComponent } from 'react';
import { View } from 'react-native';

export default class Circle extends PureComponent {
  render() {
    const { radius, x, y, fill } = this.props
    return (
      <View style={{
        height: radius,
        width: radius,
        position: 'absolute',
        top: y - size / 2,
        left: x - size / 2,
        borderRadius: 
      }} />
    )
  }
}