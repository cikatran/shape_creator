import { React, Component } from "react";
import { Surface } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Square from "../../shape/Square";
import {Dimensions } from "react-native";

export default class SquarePage extends Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Surface>
          <Square/>
        </Surface>
      </SafeAreaView>
    );
  }
}