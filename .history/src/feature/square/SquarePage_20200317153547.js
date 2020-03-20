import React, { Component } from 'react';
import { Surface } from '@react-native-community/art';
import Square from "../../shape/Square";
import { Dimensions, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class SquarePage extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Surface width={screenWidth} height={screenHeight}>
            <Square x={200} y={200} size={20} fill={"#000000"} />
          </Surface>
        </View>
      </TouchableOpacity>
    )
  }
}