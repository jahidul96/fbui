import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontScale, HEIGHT, WIDTH } from "../utils/AppDimension";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import IconButton from "./IconButton";

const HomeTopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>facebook</Text>
      <View style={styles.rightContainer}>
        <IconButton icon={<Ionicons name="search" size={24} />} />
        <IconButton icon={<Ionicons name="menu" size={24} />} />
      </View>
    </View>
  );
};

export default HomeTopBar;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: AppColors.White,
  },
  logoText: {
    fontSize: 28,
    color: AppColors.primary,
    fontWeight: "bold",
  },
  rightContainer: {
    flexDirection: "row",
    width: "31%",
    justifyContent: "space-between",
  },
  iconWrapper: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: AppColors.LightGray,
  },
});
