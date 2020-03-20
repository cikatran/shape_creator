import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'; 


export default class Circle extends PureComponent {
  render() {
    const {radius, ...rest} = this.props

    const circle = ART.Path()
      .move(radius, 0)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius)

    return <ART.Shape {...rest} d={circle} />
  }
}