import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WIDTH } from "../utils/AppDimension";
import { Image } from "react-native";

const img =
  "https://i.pinimg.com/236x/49/26/94/49269465f89b654e985f3bcfcb44ca99.jpg";

const MarketPlaceItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product?.img }} style={styles.imgStyle} />
      <View style={styles.textWrapper}>
        <Text style={styles.price}>$ {product?.price}</Text>
        <Text style={styles.brandname}>{product?.name}</Text>
      </View>
    </View>
  );
};

export default MarketPlaceItem;

const styles = StyleSheet.create({
  container: {
    width: "49%",
    paddingBottom: 30,
  },
  imgStyle: {
    width: "100%",
    height: 200,
  },
  textWrapper: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
  },
  brandname: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
