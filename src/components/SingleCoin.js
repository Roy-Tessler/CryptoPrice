import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SingleCoin = ({ coin_name, symbol, price, price_24h }) => {
  // var icon = `../utils/icons/${symbol}.png`;
  // console.log("iconconconc", icon);
  return (
    <View style={container}>
      <Image style={image} source={require(`../utils/icons/BCH.png`)} />
      <Text style={coinName}>{coin_name}</Text>
      <Text style={coinPrice}>${price.toFixed(2)}</Text>
      <Text>24 Hour Change {price_24h.toFixed(2)}%</Text>
      <Text style={coinSymbol}>{symbol}</Text>
    </View>
  );
};

export default SingleCoin;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold"
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  seperator: {
    marginTop: 10
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold"
  },
  image: {
    width: 35,
    height: 35
  },
  moneySymbol: {
    fontWeight: "bold"
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
  }
});

const {
  container,
  image,
  bold,
  moneySymbol,
  upperRow,
  coinPrice,
  coinSymbol,
  seperator,
  coinName,
  statisticsContainer,
  percentChangeMinus,
  percentChangePlus
} = styles;
