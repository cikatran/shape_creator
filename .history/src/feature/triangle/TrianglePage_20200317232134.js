import React, { Component } from './node_modules/react';
import { Surface } from '@react-native-community/art';
import { Dimensions, View } from "react-native";
import Triangle from '../../shape/Triangle';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class TrianglePage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Surface width={screenWidth} height={screenHeight}>
          <Triangle size={100} x={50} y={50} fill={"#000000"} />
        </Surface>
      </View>
    );
  }
}