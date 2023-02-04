import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import IconButton from "../components/IconButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import { Image } from "react-native";
import { chatProfilesData } from "../data/chatProfileData";

const img =
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const NotificationTabContent = () => {
  return (
    <View style={styles.container}>
      {/* top notification & search content */}
      <View style={styles.friendTextContainer}>
        <Text style={styles.friendText}>Notification</Text>
        <IconButton icon={<Ionicons name="search" size={24} />} />
      </View>

      {/* notifications */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.notifyContent}>
          {chatProfilesData.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationTabContent;

const Notification = ({ notification }) => {
  return (
    <TouchableOpacity style={styles.notifyWrapper}>
      <View style={styles.imgWrapper}>
        <Image source={{ uri: notification?.pic }} style={styles.imgStyle} />
        <View style={styles.friendIconWrapper}>
          <Ionicons name="person" size={11} color={AppColors.White} />
        </View>
      </View>
      <View style={styles.notifyTextWrapper}>
        <Text style={styles.notifytText}>
          <Text style={styles.nameStyle}>{notification?.name}</Text>
          <Text> </Text>
          {notification?.notification}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  friendTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,

    backgroundColor: AppColors.White,
  },
  friendText: {
    fontSize: 24,
    fontWeight: "700",
  },
  notifyContent: {
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 3,
  },
  imgWrapper: {},
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  friendIconWrapper: {
    backgroundColor: "#F2CD5C",
    width: 20,
    height: 20,
    borderRadius: 100,
    position: "absolute",
    zIndex: 999,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: AppColors.White,
  },
  notifyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  notifyTextWrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  notifytText: {
    fontSize: 17,
  },
});
