import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import { AppColors } from "../utils/AppColors";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
const personImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";

const SinglePost = ({ post, type }) => {
  return (
    <View style={styles.container}>
      {/* poster details */}
      <View style={styles.topContainer}>
        <View style={styles.profileImgWrapper}>
          <Image source={{ uri: post.profileImg }} style={styles.imgStyle} />
        </View>
        <View style={styles.rightProfileContainer}>
          <View style={styles.nameandIconContainer}>
            <Text style={styles.nameStyle}>{post.name}</Text>
            <View style={styles.topIconWrapper}>
              <TouchableOpacity style={styles.dotsIconStyle}>
                <Entypo name="dots-three-horizontal" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="cross" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text>{post.createdAT}</Text>
            <Fontisto
              name="world-o"
              size={9}
              style={{ marginLeft: 5, marginTop: 2 }}
            />
          </View>
        </View>
      </View>

      {/* postimg */}
      <View style={styles.postContentContainer}>
        {type == "post" && (
          <Text style={styles.captionStyle}>{post.caption}</Text>
        )}

        <View
          style={[
            styles.postimgContainer,
            type == "video" && { height: HEIGHT / 3.5 },
          ]}
        >
          <Image
            source={{ uri: personImg }}
            style={[styles.imgStyle, { borderRadius: 0 }]}
          />
        </View>
        {type == "video" && (
          <Text style={[styles.captionStyle, { marginTop: 3 }]}>
            {post.caption}
          </Text>
        )}
      </View>

      {/* react icons */}
      <View style={styles.iconandViewsWrapper}>
        <View style={styles.reactImgContainer}>
          <Image
            source={require("../../assets/icon/star.png")}
            style={styles.reactImgIconStyle}
          />
          <Image
            source={require("../../assets/icon/like.png")}
            style={styles.reactImgIconStyle}
          />
          <Image
            source={require("../../assets/icon/love.png")}
            style={styles.reactImgIconStyle}
          />
        </View>
        {type == "video" && <Text>12k Views</Text>}
      </View>

      {/* bottom content */}
      <View style={styles.bottomContainer}>
        <LikeButton
          text={post.likes}
          icon={<AntDesign name="like2" size={19} />}
        />
        <LikeButton
          text={post.comments}
          icon={<EvilIcons name="comment" size={24} />}
        />
        <LikeButton text={1} icon={<FontAwesome5 name="share" size={19} />} />
      </View>
    </View>
  );
};

export default SinglePost;

const LikeButton = ({ icon, text }) => (
  <TouchableOpacity style={styles.likeIconContainer}>
    <Text>{icon}</Text>
    <Text style={styles.countText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: AppColors.White,
    marginBottom: 2,
  },
  topContainer: {
    paddingHorizontal: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImgWrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  rightProfileContainer: {
    flex: 1,
    marginLeft: 6,
  },
  nameandIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  topIconWrapper: {
    flexDirection: "row",
  },
  dotsIconStyle: {
    marginRight: 7,
  },

  postContentContainer: {
    marginTop: 10,
  },
  postimgContainer: {
    width: WIDTH,
    height: HEIGHT / 2.5,
    marginTop: 6,
  },
  captionStyle: {
    paddingHorizontal: 10,
    fontWeight: "600",
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 10,
    marginTop: 4,
  },
  likeIconContainer: {
    width: "30%",
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.LightGray,
    borderRadius: 30,
  },

  countText: {
    marginLeft: 3,
    fontSize: 16,
    marginTop: 2,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconandViewsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  reactImgContainer: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 2,
  },
  reactImgIconStyle: {
    width: 17,
    height: 17,
  },
});
