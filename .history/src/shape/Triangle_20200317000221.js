import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

type Props = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default class Triangle extends PureComponent<Props> {
  render() {
    const {size, x, y, ...rest} = this.props

    const square = Path()
      .move(x, y)
      .lineTo(x, size)
      .lineTo(size, size + y)
      .lineTo(size + y, x)
      .close()
    return <Shape {...rest} d={square} />
  }
}