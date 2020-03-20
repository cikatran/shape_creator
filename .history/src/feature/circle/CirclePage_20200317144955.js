import React, { Component } from 'react';
import { Surface } from '@react-native-community/art';
import Square from "../../shape/Square";
import { Dimensions, View } from "react-native";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class CirclePage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Surface width={screenWidth} height={screenHeight}>
          <Cir radius={40} x={100} y={300} fill={"#000000"} />
        </Surface>
      </View>
    );
  }
}