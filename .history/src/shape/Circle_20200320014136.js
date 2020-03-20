import React, { PureComponent } from 'react';



export default class Circle extends PureComponent {
  render() {
    const { radius, x, y, fill } = this.props
    return (
      <View style={{
        height: size,
        width: size,
        position: 'absolute',
        top: y - size / 2,
        left: x - size / 2
      }} />
    )
  }
}