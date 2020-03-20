import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native'; 
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default class Circle extends PureComponent<Props> {
  render() {
    return (
      <View style={
        {
          height: height,
          width: height*2,
          backgroundColor: Colors.
        }
      }>

      </View>
    )
  }
}