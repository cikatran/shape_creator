import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'; 

type Props = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default class Rectangle extends PureComponent<Props> {
  render() {
    return (
      <View style={
        {
          height: this.props.height,
          width: height*2,
          backgroundColor: color
        }
      }>
      </View>
    )
  }
}