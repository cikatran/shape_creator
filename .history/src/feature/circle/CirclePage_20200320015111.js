import React, { Component } from 'react';
import { Dimensions, View } from "react-native";
import { CIRCLE } from '../../shapeTypes';
import Circle from '../../shape/Circle';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class CirclePage extends Component {
  _index = 0;
  constructor(props) {
    super(props);

  }

  _handleTap = (evt) => {
    const { spawnShape } = this.props;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    spawnShape(CIRCLE, x, y)
  }

  _renderShapes = () => {
    const { shape } = this.props;
    const { shape_array} = shape;
    return shape_array?.map((shape, index) => {
      return <Circle key={`CI00${index}`} x={shape.x} y={shape.y} size={shape.size} fill={shape.fill} />
    })
  }


  render() {
    return (
      <View onTouchEnd={this._handleTap} style={{ 
        flex: 1, justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'transparent' }}>
        {this._renderShapes()}
      </View>
    )
  }
}