import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AppColors } from "../utils/AppColors";

const TextButton = ({ text, extraStyle, extraTextStyle, icon }) => {
  return (
    <TouchableOpacity style={[styles.btnStyle, extraStyle]}>
      {icon && <Text style={{ marginRight: text ? 6 : 0 }}>{icon}</Text>}
      {text && <Text style={[styles.text, extraTextStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  btnStyle: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.LightGray,
    borderRadius: 30,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
});
