import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
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
      <SingleCoin key={coin.id} coin_name={coin.name} symbol={coin.symbol} />;
    });
  }
  render() {
    const { crypto } = this.props;
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
    return (
      <View>
        {this.renderCoins()}
        <Text>Maybe now</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    crypto: state.crypto
  };
};

export default connect(mapStateToProps, { FetchData })(CryptoContainer);
