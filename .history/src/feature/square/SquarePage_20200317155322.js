import React, { Component } from 'react';
import { Surface } from '@react-native-community/art';
import Square from "../../shape/Square";
import { Dimensions, View , TouchableOpacity} from "react-native";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class SquarePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shape_array: [],
    };
  }

  _handleTap = (evt) => {
    console.log("Coordinates", `x coord = ${evt.nativeEvent.locationX}`);
    console.log("Coordinates", `y coord = ${evt.nativeEvent.locationY}`);
    let shape_array = this.state.shape_array;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    shape_array.push(
      <Square key={} x={x} y={y} size={20} fill={"#000000"} />
    );
    this.setState({
      shape_array: shape_array
    });
  }

  _renderShapes = () => {
    return this.state.shape_array
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={(evt) => this._handleTap(evt)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
          <Surface width={screenWidth} height={screenHeight}>
            {this._renderShapes()}
          </Surface>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}