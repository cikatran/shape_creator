import React, { Component } from 'react';
import Square from "../../shape/Square";
import { View } from "react-native";
import {  RANDOM, SQUARE, CIRCLE } from '../../shapeTypes';
import Circle from '../../shape/Circle';
import Triangle from '../../shape/Triangle';


export default class AllPage extends Component {
  constructor(props) {
    super(props)
  }

  _handleTap = (evt) => {
    const { spawnShape } = this.props;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    spawnShape(RANDOM, x, y)
  }

  _renderShapes = () => {
    const { shape } = this.props;
    const { shape_array } = shape;
    return shape_array?.map((shape, index) => {
      switch (shape.shapeType) {
        case SQUARE:
          return <Square key={`SQ00${index}`} x={shape.x} y={shape.y} size={shape.size} fill={shape.fill} />
        case CIRCLE:
           return <Circle key={`CI00${index}`} x={shape.x} y={shape.y} radius={shape.size} fill={shape.fill} /> 
        default:
          return <Triangle key={`TR00${index}`} x={shape.x} y={shape.y} size={shape.size} fill={shape.fill} />   
      }
      
    })
  }


  render() {
    return (
      <View onTouchEnd={this._handleTap} style={{
        flex: 1,
        height: 400,
        backgroundColor: 'transparent'
      }}>
        {this._renderShapes()}
      </View>
    )
  }
}