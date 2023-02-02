import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { WIDTH } from "../utils/AppDimension";
import TextButton from "./TextButton";
import { AppColors } from "../utils/AppColors";

const img =
  "https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/cut-out-an-image/thumbnail.jpeg";

const FriendComp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={{ uri: img }} style={styles.imgStyle} />
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Akash</Text>
          <Text>2d</Text>
        </View>
        <View style={styles.btnContainer}>
          <TextButton
            text={"Confirm"}
            extraStyle={styles.extraBtnStyle}
            extraTextStyle={styles.btntextExtraStyle}
          />
          <TextButton text={"Delete"} extraStyle={styles.extraBtnStyle2} />
        </View>
      </View>
    </View>
  );
};

export default FriendComp;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    paddingHorizontal: 15,
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  imgWrapper: {
    width: "25%",
    height: 80,
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 120 / 2,
  },
  rightContainer: {
    marginLeft: 10,
    flex: 1,
    height: 70,
    justifyContent: "space-around",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  extraBtnStyle: {
    width: "45%",
    backgroundColor: AppColors.primary,
    height: 33,
  },
  btntextExtraStyle: { color: AppColors.White },
  extraBtnStyle2: {
    width: "45%",
    marginLeft: 10,
    height: 33,
  },
});
