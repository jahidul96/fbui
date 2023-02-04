import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TopHeadBackComp from "../components/TopHeadBackComp";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import { AppColors } from "../utils/AppColors";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TextButton from "../components/TextButton";
import { chatProfilesData } from "../data/chatProfileData";
import HomePostComp from "../components/HomePostComp";
import AllPosts from "../components/AllPosts";
import { myPosts } from "../data/myposts";
import SinglePost from "../components/SinglePost";

const coverImg =
  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const personImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";

const Profile = () => {
  return (
    <View style={styles.container}>
      <TopHeadBackComp />

      {/* scroll content */}
      <ScrollView>
        <View
          style={{
            backgroundColor: AppColors.White,
          }}
        >
          {/* cover img */}
          <View style={styles.coverImgWrapper}>
            <Image source={{ uri: coverImg }} style={styles.coverImgStyle} />
          </View>

          {/* profile img */}
          <TouchableOpacity style={styles.profileImgWrapper}>
            <Image source={{ uri: personImg }} style={styles.profileImgStyle} />
            <View style={styles.profileAddPicContainer}>
              <Ionicons name="camera" size={20} />
            </View>
          </TouchableOpacity>

          <Text style={styles.profileName}>Akash</Text>

          {/* add story etc button */}
          <View style={styles.iconGrp}>
            <TextButton
              text="Add to story"
              icon={
                <FontAwesome5
                  name="plus-circle"
                  color={AppColors.White}
                  size={16}
                />
              }
              extraStyle={styles.btnaddBtnStyle}
              extraTextStyle={styles.extraTextStyle}
            />
            <TextButton
              text="Edit Profile"
              icon={<FontAwesome5 name="pencil-alt" />}
              extraStyle={styles.btnaEditStyle}
            />
            <TextButton
              icon={<Entypo name="dots-three-vertical" size={18} />}
              extraStyle={styles.menuBtnStyle}
            />
          </View>

          {/* follwer/about btn */}
          <View style={styles.countWrapper}>
            <CountIconButton
              text="Joined December 2018"
              icon={<Ionicons name="time" size={18} />}
            />
            <CountIconButton
              text="followed by 240 people"
              icon={<Ionicons name="wifi" size={18} />}
            />
            <CountIconButton
              text="See more about ypurself"
              icon={
                <MaterialCommunityIcons
                  name="dots-horizontal-circle"
                  size={18}
                />
              }
            />
          </View>

          {/* frineds  */}
          <View style={styles.friendsContainer}>
            <View style={styles.friendsCounterContainer}>
              <View>
                <Text style={styles.friendText}>Friends</Text>
                <Text>2,567 friends</Text>
              </View>
              <Text style={styles.sellall}>See all</Text>
            </View>

            <View style={styles.friendsProfileWrapper}>
              {chatProfilesData.slice(0, 6).map((data) => {
                return (
                  <TouchableOpacity style={styles.friendProfile}>
                    <Image
                      source={{ uri: data.pic }}
                      style={styles.friendProfileImgStyle}
                    />

                    <Text style={styles.friendname}>{data.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* see photos button */}
        <View
          style={[
            styles.iconGrp,
            {
              backgroundColor: AppColors.White,
              paddingVertical: 15,
              marginVertical: 5,
            },
          ]}
        >
          <TextButton
            text="photos"
            icon={<Ionicons name="image" size={16} />}
            extraStyle={styles.btnPhotosStyle}
          />
          <TextButton
            text="avator"
            icon={<MaterialCommunityIcons name="robot" size={18} />}
            extraStyle={styles.btnPhotosStyle}
          />
          <TextButton
            text="Events"
            icon={<Ionicons name="md-star" size={18} />}
            extraStyle={styles.btnPhotosStyle}
          />
        </View>

        {/* profile post comp */}
        <View style={styles.postContainer}>
          <Text style={styles.postText}>Posts</Text>
          <HomePostComp profile={true} />
          <View
            style={[
              styles.iconGrp,
              {
                backgroundColor: AppColors.White,
                marginVertical: 5,
              },
            ]}
          >
            <TextButton
              text="photos"
              icon={<Ionicons name="image" size={16} color="blue" />}
              extraStyle={styles.btnAddPhoto}
              extraTextStyle={styles.checkInText}
            />
            <TextButton
              text="check in"
              icon={
                <FontAwesome5 name="map-marker-alt" size={16} color="red" />
              }
              extraStyle={styles.chechBtn}
              extraTextStyle={styles.checkInText}
            />
            <TextButton
              text="Life Event"
              icon={<Ionicons name="md-flag-outline" size={16} />}
              extraStyle={styles.btnAddPhoto}
              extraTextStyle={styles.checkInText}
            />
          </View>
        </View>
        {/* post contents */}
        <View
          style={{
            marginTop: 4,
          }}
        >
          {myPosts.map((post) => (
            <SinglePost key={post.id} post={post} type="post" />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const CountIconButton = ({ icon, text }) => (
  <TouchableOpacity style={styles.countBtnContainer}>
    <Text
      style={{
        marginRight: 20,
      }}
    >
      {icon}
    </Text>
    <Text
      style={{
        fontSize: 16,
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Gray,
  },
  coverImgWrapper: {
    width: WIDTH,
    height: HEIGHT / 4.4,
  },
  coverImgStyle: {
    width: "100%",
    height: "100%",
  },
  profileImgWrapper: {
    paddingHorizontal: 15,
    marginTop: -80,
  },
  profileImgStyle: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: AppColors.primary,
    position: "relative",
  },
  profileAddPicContainer: {
    position: "absolute",
    zIndex: 999,
    bottom: 0,
    left: 100,
    width: 35,
    height: 35,
    backgroundColor: AppColors.LightGray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  profileName: {
    paddingHorizontal: 15,
    marginTop: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  iconGrp: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  btnaddBtnStyle: {
    flexDirection: "row",
    width: "40%",
    height: 35,
    borderRadius: 8,
    backgroundColor: AppColors.primary,
  },
  btnaEditStyle: {
    flexDirection: "row",
    width: "40%",
    height: 35,
    borderRadius: 8,
  },
  extraTextStyle: { color: AppColors.White },
  menuBtnStyle: {
    width: 40,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  countWrapper: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  countBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  friendsContainer: {
    paddingHorizontal: 15,
  },
  friendsCounterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  friendText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sellall: {
    fontSize: 16,
    color: AppColors.ActiveColor,
  },
  friendsProfileWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginVertical: 15,
  },
  friendProfile: {
    width: WIDTH / 3.5,
    // marginRight: 10,
    marginBottom: 10,
  },
  friendProfileImgStyle: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  friendname: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 3,
  },
  btnPhotosStyle: {
    flexDirection: "row",
    width: "30%",
    height: 35,
    borderRadius: 8,
  },
  postContainer: {
    paddingVertical: 20,
    backgroundColor: AppColors.White,
  },
  postText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  btnAddPhoto: {
    width: "30%",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    height: 25,
  },
  chechBtn: {
    width: "30%",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: AppColors.Gray,
    borderRightColor: AppColors.Gray,
    borderRadius: 0,
    height: 25,
  },
  checkInText: {
    fontSize: 13,
    fontWeight: "500",
  },
});
