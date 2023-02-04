import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import TextButton from "../components/TextButton";
import FriendComp from "../components/FriendComp";
import IconButton from "../components/IconButton";
import { chatProfilesData } from "../data/chatProfileData";

const FriendTabContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.friendTextContainer}>
        <Text style={styles.friendText}>Friends</Text>
        <IconButton icon={<Ionicons name="search" size={24} />} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* tab  */}
        <View style={styles.tabWrapper}>
          <TextButton text={"Suggestions"} extraStyle={styles.extraBtnStyle} />
          <TextButton
            text={"Your Friends"}
            extraStyle={styles.extraBtnStyle2}
          />
        </View>

        {/* request text */}
        <View style={styles.requestTextContainer}>
          <Text style={styles.requestText}>Friend requests</Text>
          <Text style={styles.seeText}>See all</Text>
        </View>

        {/* request */}
        <View style={styles.reqProfileContainer}>
          {chatProfilesData.slice(3, 6).map((friend) => (
            <FriendComp
              friend={friend}
              key={friend.id}
              confirmText={"Confirm"}
              removeText="Delete"
            />
          ))}
        </View>

        {/* may be know text */}
        <View style={[styles.requestTextContainer, { marginTop: 20 }]}>
          <Text style={styles.requestText}>Friends you may know</Text>
        </View>

        {/* request */}
        <View
          style={[
            styles.reqProfileContainer,
            { borderBottomWidth: 0, borderTopWidth: 0 },
          ]}
        >
          {chatProfilesData.map((friend) => (
            <FriendComp
              friend={friend}
              key={friend.id}
              confirmText={"Add"}
              removeText="Remove"
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FriendTabContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.White,
    flex: 1,
  },
  friendTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 55,
  },
  iconWrapper: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: AppColors.LightGray,
  },
  friendText: {
    fontSize: 24,
    fontWeight: "700",
  },
  tabWrapper: {
    paddingHorizontal: 15,
    flexDirection: "row",
    paddingTop: 8,
  },
  extraBtnStyle: {
    width: "40%",
  },
  extraBtnStyle2: {
    width: "40%",
    marginLeft: 10,
  },

  requestTextContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    paddingBottom: 5,
    marginTop: 20,
  },
  requestText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  seeText: {
    fontSize: 15,
    color: AppColors.primary,
  },
  reqProfileContainer: {
    borderBottomColor: AppColors.Gray,
    borderBottomWidth: 1,
    borderTopColor: AppColors.Gray,
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});
