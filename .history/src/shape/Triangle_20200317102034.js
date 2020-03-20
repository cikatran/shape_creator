import React, { PureComponent } from 'react';
import { Shape, Path, Group } from '@react-native-community/art';


export default class Triangle extends PureComponent {
  render() {
    const { size, x, y, ...rest } = this.props

    const triangle = Path()
      .moveTo(0, 0)
      .lineTo(0, size)
      .lineTo(size, size)
      .close()
    return (
      <Group>
        <Shape {...rest} d={triangle} />
      </Group>
    )

  }
}