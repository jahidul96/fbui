import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppColors } from "../utils/AppColors";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import { chatProfilesData } from "../data/chatProfileData";

const personImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";

const AddStoryComp = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.storiesContainer}
        showsHorizontalScrollIndicator={false}
      >
        {/* my add story cmomp */}
        <TouchableOpacity style={styles.myStoryAddBtn}>
          {/* position btn */}
          <View style={styles.addIconContainer}>
            <Image
              source={require("../../assets/icon/book.png")}
              style={styles.iconImgStyle}
            />
            <View style={styles.plusIconWrapper}>
              <Image
                source={require("../../assets/icon/plus.png")}
                style={styles.plusIconImg}
              />
            </View>
          </View>
          <Image source={{ uri: personImg }} style={styles.myImgStyle} />
          <View style={styles.textWrapper}>
            <Text style={styles.stories}>Stories</Text>
            <Text style={styles.addText}>Add to story</Text>
          </View>
        </TouchableOpacity>

        {/* friends stories */}
        {chatProfilesData.map((storie) => (
          <FriendStory key={storie.id} storie={storie} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AddStoryComp;

const FriendStory = ({ storie }) => (
  <TouchableOpacity style={styles.myStoryAddBtn}>
    <ImageBackground
      source={{ uri: storie?.pic }}
      style={styles.friendStoryImgStyle}
      borderRadius={10}
    >
      <View style={styles.counterView}>
        <Text style={styles.countText}>2</Text>
      </View>
      <Text style={[styles.countText, styles.name]}>{storie?.name}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: HEIGHT / 3.8,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -2,
  },
  storiesContainer: {
    flexGrow: 1,
    height: HEIGHT / 4,
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: AppColors.White,
    marginTop: 6,
  },
  myStoryAddBtn: {
    height: "90%",
    backgroundColor: AppColors.LightGray,
    width: WIDTH / 3.6,
    borderRadius: 10,
    marginRight: 10,
    elevation: 2,
  },
  myImgStyle: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  stories: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  addIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: AppColors.White,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 999,
    left: 10,
    top: 10,
  },
  iconImgStyle: {
    width: 20,
    height: 20,
  },
  plusIconWrapper: {
    position: "absolute",
    zIndex: 999,
    bottom: 0,
    right: 0,
    backgroundColor: AppColors.White,
    borderRadius: 100,
  },
  plusIconImg: {
    width: 13,
    height: 13,
  },

  friendStoryImgStyle: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  counterView: {
    width: 20,
    height: 24,
    backgroundColor: AppColors.primary,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginRight: 8,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    color: AppColors.White,
    fontWeight: "bold",
    fontSize: 13,
  },
  name: {
    marginBottom: 10,
    marginLeft: 10,
  },
});
