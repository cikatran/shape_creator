import { React, Component } from "react";
import { Surface } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Square from "../../shape/Square";
import {Dimensions } from "react-native";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class SquarePage extends Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Surface width={s} height={"100%"}>
              <Square x={200} y={200} size={20} fill={"#000000"}/>
              <Circle radius={40} x={100} y={300} fill={"#000000"}/>
              <Triangle size={100} x={50} y={50} fill={"#000000"}/>
            </Surface>
      </SafeAreaView>
    );
  }
}