import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AppColors } from "../utils/AppColors";

const InputComp = ({ placeholder, extraInputStyle }) => (
  <TextInput
    placeholder={placeholder}
    style={[styles.inputStyle, extraInputStyle]}
  />
);

export default InputComp;

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: AppColors.LightGray,
    paddingLeft: 10,
  },
});
