import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import FetchData from "../actions/FetchData";
import SingleCoin from "./SingleCoin";
import Spinner from "react-native-loading-spinner-overlay";
class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchData();
  }
  renderCoins() {
    const { crypto } = this.props;
    return crypto.data.map(coin => {
      return (
        <SingleCoin
          key={coin.id}
          coin_name={coin.name}
          symbol={coin.symbol}
          price={coin.quote.USD.price}
          price_24h={coin.quote.USD.percent_change_24h}
        />
      );
    });
  }
  render() {
    const { crypto } = this.props;
    const { container } = styles;
    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Getting coin data"}
            textStyle={{ color: "blue" }}
            animation="fade"
          />
        </View>
      );
    }
    return <ScrollView style={container}>{this.renderCoins()}</ScrollView>;
  }
}

const mapStateToProps = state => {
  return {
    crypto: state.crypto
  };
};

export default connect(mapStateToProps, { FetchData })(CryptoContainer);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    paddingTop: 55
  }
});
