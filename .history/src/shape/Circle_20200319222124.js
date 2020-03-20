import React, { PureComponent } from 'react';
import { Shape, Path, Group } from '@react-native-community/art';



export default class Circle extends PureComponent {
  render() {
    const { radius, x, y, ...rest } = this.props

    const circle = Path()
      .move(0, 0)
      .move(radius, 0)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius)

    return (
      <Group x={x} y={y}>
        <Shape {...rest} d={circle} >
        <Image width={size} height={size} source={{uri: fill}}/>
          </Shape>
      </Group>
    )
  }
}