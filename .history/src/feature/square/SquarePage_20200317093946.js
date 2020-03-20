import { React } from "react";
import { Surface } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class SquarePage extends React.Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Surface>
          
        </Surface>
      </SafeAreaView>
    );
  }
}