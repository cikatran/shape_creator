import React, { PureComponent, Component } from 'react';
import { Shape, Path, Group } from '@react-native-community/art';


export default class Square extends PureComponent {

  render() {
    const { size, x, y, ...rest } = this.props

    const square = Path()
      .moveTo(0, 0)
      .lineTo(size/2, 0)
      .lineTo(size/2, -size/2)
      .lineTo(-size/2, -size/2)
      .lineTo(-size/2, size/2)
      .lineTo(-size/2, size/2)
      .close()
    return (
      <Group x={x} y={y}>
        <Shape {...rest} d={square} />
      </Group>
    )
  }
}