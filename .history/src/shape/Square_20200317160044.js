import React, { PureComponent } from 'react';
import { Shape, Path, Group } from '@react-native-community/art';


export default class Square extends Com {

  shouldComponentUpdate(nextProps, nextState){
    return !equals(nextProps, this.props); // equals() is your implementation
 }

  render() {
    const { size, x, y, ...rest } = this.props

    const square = Path()
      .moveTo(0, 0)
      .lineTo(0, size)
      .lineTo(size, size)
      .lineTo(size, 0)
      .close()
    return (
      <Group x={x} y={y}>
        <Shape {...rest} d={square} />
      </Group>
    )
  }
}