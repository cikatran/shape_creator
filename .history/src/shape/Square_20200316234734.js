import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'; 


export default class Square extends PureComponent {
  render() {
    const {radius, x, y, ...rest} = this.props

    const square = Path()
      .move(size, position)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius)

    return <Shape {...rest} d={square} />
  }
}