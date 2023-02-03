import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { WIDTH } from "../utils/AppDimension";
import { AppColors } from "../utils/AppColors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const personImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";

const HomePostComp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity
          style={styles.profileImgWrapper}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.activeStyle} />
          <Image source={{ uri: personImg }} style={styles.imgStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputBtnStyle}>
          <Text style={styles.textStyle}>What's on your mind?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.photoIconWrapper}>
          <Ionicons name="images" size={24} />
          <Text>Photos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePostComp;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: AppColors.White,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImgWrapper: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  inputBtnStyle: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: AppColors.LightGray,
    height: 43,
    justifyContent: "center",
    borderRadius: 20,
    marginRight: 8,
  },
  textStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  photoIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeStyle: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 100,
    backgroundColor: AppColors.ActiveColor,
    zIndex: 999,
    right: 4,
    bottom: 0,
  },
});
