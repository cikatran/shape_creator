import React, { Component } from 'react';
import { View } from "react-native";
import { CIRCLE } from '../../shapeTypes';
import Circle from '../../shape/Circle';
import RNShake from 'react-native-shake';


export default class CirclePage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { removeAllShape } = this.props;
    RNShake.addEventListener('ShakeEvent', () => {
      removeAllShape(CIRCLE);
    });
  }

  _handleTap = (evt) => {
    const { spawnShape } = this.props;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    spawnShape(CIRCLE, x, y)
  }

  _renderShapes = () => {
    const { shape, changeShapeBackground } = this.props;
    const { shape_array } = shape;
    return shape_array?.map((shape, index) => {
      return (
        <Circle key={`CI00${index}`}
          x={shape.x}
          y={shape.y}
          radius={shape.size}
          fill={shape.fill}
          onDoubleTap={() => changeShapeBackground(CIRCLE, index)} />
      )
    })
  }

  render() {
    return (
      <View
        onStartShouldSetResponder={() => true}
        onResponderRelease={this._handleTap}
        style={{
          flex: 1, justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}>
        {this._renderShapes()}
      </View>
    )
  }
}