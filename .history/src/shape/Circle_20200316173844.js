import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'; 

type Props = {
  color: PropTypes.string.isRequired,
  he: PropTypes.number.isRequired
}

export default class Circle extends PureComponent<Props> {
  render() {
    return (
      <View>

      </View>
    )
  }
}