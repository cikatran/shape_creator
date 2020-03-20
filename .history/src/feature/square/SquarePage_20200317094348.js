import { React } from "react";
import { Surface } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Square from "../../shape/Square";

export default class SquarePage extends COM{
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