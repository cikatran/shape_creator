import React, { PureComponent } from 'react';
import {Shape, Path} from '@react-native-community/art';


export default class Triangle extends PureComponent {
  render() {
    const {size, x, y, ...rest} = this.props

    const triangle = Path()
      .moveTo(0, y)
      .lineTo(x, size)
      .lineTo(size, size + y)
      .close()
    return <Shape {...rest} d={triangle} />
  }
}