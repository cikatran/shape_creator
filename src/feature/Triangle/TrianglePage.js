import React, { Component } from 'react';
import { View } from "react-native";
import { TRIANGLE } from '../../shapeTypes';
import Triangle from '../../shape/Triangle';
import RNShake from 'react-native-shake';


export default class TrianglePage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { removeAllShape } = this.props;
    RNShake.addEventListener('ShakeEvent', () => {
      removeAllShape(TRIANGLE);
    });
  }

  _handleTap = (evt) => {
    const { spawnShape } = this.props;
    let x = evt.nativeEvent.locationX;
    let y = evt.nativeEvent.locationY;
    spawnShape(TRIANGLE, x, y)
  }

  _renderShapes = () => {
    const { shape, changeShapeBackground } = this.props;
    const { shape_array } = shape;
    return shape_array?.map((shape, index) => {
      return (
        <Triangle key={`TR00${index}`}
          x={shape.x}
          y={shape.y}
          size={shape.size}
          fill={shape.fill}
          onDoubleTap={() => changeShapeBackground(TRIANGLE, index)} />
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