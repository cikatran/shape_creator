import { React } from "react";

export default class SquarePage extends React.Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <CustomText />
          <Heart />
          <CustomShape />
        </ScrollView>
      </SafeAreaView>
    );
  }
}