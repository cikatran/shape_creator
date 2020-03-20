import React, { PureComponent, Component } from 'react';
import {Image, View, StyleSheet} from 'react-native';


export default class Square extends PureComponent {

  // render() {
    // const { size, x, y, ...rest } = this.props
  //   const patterns = 

  //   const square = Path()
  //     .moveTo(0, 0)
  //     .lineTo(size/2, 0)
  //     .lineTo(size/2, -size/2)
  //     .lineTo(-size/2, -size/2)
  //     .lineTo(-size/2, size/2)
  //     .lineTo(size/2, size/2)
  //     .lineTo(size/2, 0)
  //     .close()
  //   return (
  //     <Group x={x} y={y}>
  //       <Shape {...rest} d={square} />
  //     </Group>
  //   )
  // }

  render() {
    const { size, x, y, fill } = this.props
    return (
    <View style={{height: size, width: size, backgrou}} >
      <Image style={{width: size, height: size}} source={fill}/>
      </View>
    )
  }
}

