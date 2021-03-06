import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

type Props = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default class Triangle extends PureComponent<Props> {
  render() {
    return (
      <View style={
        {
          borderTopWidth: this.props.s,
          borderRightWidth: this.props.width / 2.0,
          borderBottomWidth: 0,
          borderLeftWidth: this.props.width / 2.0,
          borderTopColor: this.props.color,
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
        }
      }>
      </View>
    )
  }
}