import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  image: {
    width: 40,
    height: 40
  },
  bold: {
    fontWeight: "bold"
  }
});
const { container, image, bold } = styles;

const SingleCoin = props => {
  console.log("what about props", props);
  return (
    <View style={container}>
      <Text>SYMBOBLB{symbol}</Text>
      <Text>TRTR{coin_name}</Text>
    </View>
  );
};

export default SingleCoin;

//  <Image source={`/utils/BTC.png`} />
