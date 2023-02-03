import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { WIDTH } from "../utils/AppDimension";
import { Image } from "react-native";
import { AppColors } from "../utils/AppColors";

const img =
  "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg";
const SingleChats = ({ chat }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={{ uri: chat.pic }} style={styles.imgStyle} />
        <View style={styles.activeContainer}>
          <Text style={styles.activetext}>5 m</Text>
        </View>
      </View>
      <View>
        <Text style={styles.name}>{chat.name}</Text>
        <Text style={styles.lastMsg}>{chat.lastmsg}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleChats;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: AppColors.White,
  },
  imgWrapper: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  name: {
    fontWeight: "bold",
  },
  lastMsg: {
    // color: "#bbb",
  },
  activeContainer: {
    position: "absolute",
    bottom: -2,
    right: -4,
    paddingHorizontal: 5,
    backgroundColor: AppColors.ActiveColor,
    borderRadius: 10,
  },
  activetext: {
    fontSize: 11,
    color: AppColors.White,
  },
});
