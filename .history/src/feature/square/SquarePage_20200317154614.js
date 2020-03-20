import React, { Component } from 'react';
import { Surface } from '@react-native-community/art';
import Square from "../../shape/Square";
import { Dimensions, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class SquarePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shape_array: [],
    };
  }

  _handleTap(evt) {
    let shape_array = this.state.shape_array;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    shape_array.push(
      <Square x={x} y={y} size={20} fill={"#000000"} />
    );
    this.setState({
      shape_array: shape_array
    });
  }

  _renderShapes


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={(evt) => this._handleTap(evt)}>
          <Surface width={screenWidth} height={screenHeight}>
            {this.state.shape_array}
          </Surface>
        </TouchableOpacity>
      </View>
    )
  }
}