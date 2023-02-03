import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppColors } from "../utils/AppColors";

const IconButton = ({ icon, extraStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.iconWrapper, extraStyle]}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: AppColors.LightGray,
  },
});
