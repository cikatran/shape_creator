import React, { Component } from 'react';
import { Surface } from '@react-native-community/art';
import Square from "../../shape/Square";
import { Dimensions, View, TouchableWithoutFeedback } from "react-native";
import { SQUARE } from '../../shapeTypes';

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
    const { spawnShape } = this.props;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    console.log('Spawn Shape')
    spawnShape(SQUARE, x, y)
  }

  _renderShapes = () => {
    const { shape_array } = this.props;
    return shape_array?.map((shape, index) => {
      return <Square key={`SQ00${index}`} x={shape.x} y={shape.y} size={shape.size} fill={shape.fill} />
    })
  }


  render() {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <TouchableWithoutFeedback onPress={this._handleTap}>
      //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //     <Surface width={screenWidth} height={screenHeight}>
      //       {this._renderShapes()}
      //     </Surface>

      //     </View>
          
      //   </TouchableWithoutFeedback>
      // </View>


      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <TouchableWithoutFeedback onPress={this._handleTap}>
      //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //       {this._renderShapes()}
      //     </View>
      //   </TouchableWithoutFeedback>
      // </View>
<Surface>
<Square key={`SQ00${0}`} x={100} y={100} size={100} fill={''} />
</Surface>
     
    )
  }
}