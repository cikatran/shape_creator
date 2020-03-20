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
          borderTopWidth: this.props.height / 2.0,
          borderRightWidth: this.props.width,
          borderBottomWidth: this.props.height / 2.0,
          borderLeftWidth: 0,
          borderTopColor: 'transparent',
          borderRightColor: this.props.color,
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
        }
      }>
      </View>
    )
  }
}