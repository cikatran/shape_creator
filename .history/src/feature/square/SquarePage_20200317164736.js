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
    let {square_array} = this.state;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    square_array.push({id: this._index, x: x, y: y, size: 20})
    this.setState({
      square_array: square_array
    });
  }

  _renderShapes = () => {
    const {square_array} = this.state;
    square_array.map((square, index) => {
      return <Square key={index} x={square.x} y={square.y} size={20} fill={"#000000"} />
    })
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