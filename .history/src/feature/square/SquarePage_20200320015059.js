import React, { Component } from 'react';
import Square from "../../shape/Square";
import { View } from "react-native";
import { SQUARE } from '../../shapeTypes';


export default class SquarePage extends Component {
  constructor(props) {
    super(props)
  }

  _handleTap = (evt) => {
    const { spawnShape } = this.props;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    spawnShape(SQUARE, x, y)
  }

  _renderShapes = () => {
    const { shape } = this.props;
    const { shape_array } = shape;
    return shape_array?.map((shape, index) => {
      return <Square key={`SQ00${index}`} x={shape.x} y={shape.y} size={shape.size} fill={shape.fill} />
    })
  }


  render() {
    return (
      <View onTouchEnd={this._handleTap} style={{
        flex: 1, justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
      }}>
        {this._renderShapes()}
      </View>
    )
  }
}