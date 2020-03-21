import React, { PureComponent } from 'react';
import GesturedBound from '../util/GesturedBound';
export default class Circle extends PureComponent {
  render() {
    const { radius, x, y, fill } = this.props
    return (
      <GesturedBound
        onDoubleTap={this.props.onDoubleTap} style={{
          height: radius,
          width: radius,
          position: 'absolute',
          top: y - radius / 2,
          left: x - radius / 2,
          borderRadius: radius / 2,
          backgroundColor: fill
        }} />
    )
  }
}