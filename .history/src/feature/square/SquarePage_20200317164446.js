import React, { Component } from 'react';
import { Surface } from '@react-native-community/art';
import Square from "../../shape/Square";
import { Dimensions, View , TouchableOpacity} from "react-native";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class SquarePage extends Component {
  _index = 0;
  constructor(props) {
    super(props);
    this.state = {
      square_array: [],
    };
  }

  _handleTap = (evt) => {
    let square_array = this.state.shape_array;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    const newShape =
      <Square key={this._index} x={x} y={y} size={20} fill={"#000000"} />
    
    this._index++;
    this.setState({
      shape_array: [...shape_array, newShape]
    });
  }

  _renderShapes = () => {
    const {shape_array} = this.state;
    return shape_array
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this._handleTap}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Surface width={screenWidth} height={screenHeight}>
            {this._renderShapes()}
          </Surface>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}