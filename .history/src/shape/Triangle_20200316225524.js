import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'; 

type Props = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default class Triangle extends PureComponent<Props> {
  render() {
    return (
      <View style={
        {
          width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red'
        }
      }>
      </View>
    )
  }
}