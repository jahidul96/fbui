import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { AppColors } from "../utils/AppColors";

const ChatProfileShowCase = ({ chatprofile }) => {
  return (
    <TouchableOpacity style={styles.storyContainer}>
      <TouchableOpacity style={styles.story}>
        <Image source={{ uri: chatprofile.pic }} style={styles.imgStyle} />
        <View style={styles.activeIndicator} />
      </TouchableOpacity>
      <Text>
        {chatprofile.name.length > 4
          ? chatprofile.name.slice(0, 4) + "..."
          : chatprofile.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ChatProfileShowCase;

const styles = StyleSheet.create({
  storyContainer: {
    marginHorizontal: 6,
  },
  story: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.LightGray,
    borderRadius: 100,
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  activeIndicator: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: AppColors.ActiveColor,
    bottom: -2,
    right: 3,
  },
});
