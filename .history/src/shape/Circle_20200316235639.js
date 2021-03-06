import React, {PureComponent} from 'react';
import {Shape, Path} from '@react-native-community/art';



export default class Circle extends PureComponent {
  render() {
    const {radius, x, y, ...rest} = this.props

    const circle = Path()
      .move(radius, position)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius)

    return <Shape {...rest} d={circle} />
  }
}