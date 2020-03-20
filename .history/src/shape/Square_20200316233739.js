import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'; 

type Props = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default class Square extends PureComponent {
  render() {
    const {radius, ...rest} = this.props

    const circle = Path()
      .move(radius, 0)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius)

    return <Shape {...rest} d={circle} />
  }
}