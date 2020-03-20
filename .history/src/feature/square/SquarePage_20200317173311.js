import React, { Component } from 'react';
import { Surface } from '@react-native-community/art';
import Square from "../../shape/Square";
import { Dimensions, View, TouchableWithoutFeedback } from "react-native";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const maxShapeSize = Math.round(Dimensions.get('window').width*45/100);
const minShapeSize = Math.round(Dimensions.get('window').height*10/100);

export default class SquarePage extends Component {
  _index = 0;
  constructor(props) {
    super(props);
    this.state = {
      square_array: [],
    };
  }

  _handleTap = (evt) => {
    let { square_array } = this.state;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    let randomSize = Math.floor(Math.random() * (maxShapeSize - x*45/100)) + minShapeSize;
    this.setState({
      square_array: [...square_array, {id:`square_${this._index}`, x: x, y: y, size: randomSize }]
    });
    this._index++;
  }

  _renderShapes = () => {
    const { square_array } = this.state;
    return square_array.map((square, index) => {
      return <Square key={square.id} x={square.x} y={square.y} size={square.size} fill={"#000000"} />
    })
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={this._handleTap}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Surface width={screenWidth} height={screenHeight}>
              {this._renderShapes()}
            </Surface>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}