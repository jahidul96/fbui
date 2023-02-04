import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TopHeadBackComp from "../components/TopHeadBackComp";
import { AppColors } from "../utils/AppColors";
import TextButton from "../components/TextButton";
import { Image } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InputComp from "../components/InputComp";

const personImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";

const AddPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <TopHeadBackComp text="Create" extraStyle={styles.extraStyle} />
        <TextButton
          text="Post"
          extraStyle={styles.extraTextBtnStyle}
          extraTextStyle={styles.extraTextStyle}
        />
      </View>

      {/* content */}

      <ScrollView>
        {/* profile own */}
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileImWrapper}>
            <Image source={{ uri: personImg }} style={styles.imgStyle} />
          </View>
          <View>
            <Text style={styles.profileName}>Akash</Text>
            <Fontisto name="world-o" size={9} style={{ marginTop: 2 }} />
          </View>
        </TouchableOpacity>

        {/* input details  */}
        <View style={styles.inputWrapper}>
          <InputComp
            placeholder="What's on your mind?"
            multiline
            extraInputStyle={styles.extraInputStyle}
          />
        </View>

        {/* colors scroolview */}
        <View></View>

        {/* conent add button */}

        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <TextButton
            icon={<Ionicons name="camera-outline" color={"green"} size={22} />}
            extraStyle={styles.addContentBtn}
            text="Photos/video"
            extraTextStyle={styles.extraAddTextStyle}
          />
          <TextButton
            icon={
              <Ionicons name="person-add-outline" color={"red"} size={20} />
            }
            extraStyle={styles.addContentBtn}
            text="Tag friends"
            extraTextStyle={styles.extraAddTextStyle}
          />
          <TextButton
            icon={
              <MaterialCommunityIcons
                name="map-marker-outline"
                color={"red"}
                size={20}
              />
            }
            extraStyle={styles.addContentBtn}
            text="Add location"
            extraTextStyle={styles.extraAddTextStyle}
          />
          <TextButton
            icon={<Fontisto name="slightly-smile" color={"red"} size={16} />}
            extraStyle={styles.addContentBtn}
            text="Add activity"
            extraTextStyle={styles.extraAddTextStyle}
          />
          <TextButton
            icon={<Ionicons name="videocam-outline" color={"red"} size={18} />}
            extraStyle={styles.addContentBtn}
            text="Go live"
            extraTextStyle={styles.extraAddTextStyle}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 10,
          }}
        >
          <TextButton
            text="Post"
            extraStyle={styles.postBtn}
            extraTextStyle={styles.postText}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: AppColors.White,
    alignItems: "center",
    elevation: 1,
  },
  extraStyle: {
    width: "70%",
  },
  extraTextBtnStyle: {
    width: "25%",
    backgroundColor: "transparent",
  },
  extraTextStyle: {
    color: AppColors.primary,
  },

  profileContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: AppColors.White,
    marginTop: 3,
    marginBottom: 3,
  },
  profileImWrapper: {
    marginRight: 10,
  },
  imgStyle: {
    width: 38,
    height: 38,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  extraInputStyle: {
    height: 100,
    paddingVertical: 10,
    borderRadius: 2,
    elevation: 1,
  },
  addContentBtn: {
    backgroundColor: "transparent",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  extraAddTextStyle: {
    fontWeight: "500",
    marginLeft: 10,
  },
  postBtn: {
    height: 45,
    backgroundColor: AppColors.primary,
    borderRadius: 5,
  },
  postText: {
    color: AppColors.White,
  },
});
