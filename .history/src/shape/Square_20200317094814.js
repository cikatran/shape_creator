import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'; 
import {Shape, Path} from '@react-native-community/art';


export default class Square extends PureComponent {
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