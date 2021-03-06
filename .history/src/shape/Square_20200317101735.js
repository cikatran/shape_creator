import React, {PureComponent} from 'react';
import {Shape, Path} from '@react-native-community/art';


export default class Square extends PureComponent {
  render() {
    const {size, x, y, ...rest} = this.props

    const square = Path()
      .moveTo(0, 0)
      .lineTo(0, size)
      .lineTo(size, size)
      .lineTo(size, x)
      .close()
    return <Shape {...rest} d={square} />
  }
}