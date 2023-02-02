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
import AntDesign from "react-native-vector-icons/AntDesign";
import { AppColors } from "../utils/AppColors";
import { chatProfiles } from "../data/chatProfileData";
import ChatProfileShowCase from "../components/ChatProfileShowCase";
import SingleChats from "../components/SingleChats";

const MessageTab = () => {
  return (
    <View>
      {/* top text and icon btn content */}
      <View style={styles.messageSearchContainer}>
        <Text style={styles.messageText}>Messages</Text>
        <View style={styles.IconButtonWrapper}>
          <IconButton
            icon={<Ionicons name="settings" size={24} />}
            extraStyle={styles.iconExbtnstyle}
          />
          <IconButton icon={<Ionicons name="search" size={24} />} />
        </View>
      </View>

      {/* stories */}

      <View style={styles.storiesContentWrapper}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.storiesContentWrapper}
        >
          <TouchableOpacity style={styles.storyContainer}>
            <TouchableOpacity style={styles.story}>
              <Ionicons name="person" size={18} />
              <View style={styles.addWrapper}>
                <AntDesign name="plus" size={12} color={AppColors.White} />
              </View>
            </TouchableOpacity>
            <Text>Add Story</Text>
          </TouchableOpacity>

          {/* friends profile show for msg  */}

          {chatProfiles.map((chatprofile) => (
            <ChatProfileShowCase chatprofile={chatprofile} />
          ))}
        </ScrollView>
      </View>

      {/* chats */}
      <View style={styles.chatWrapper}>
        <SingleChats />
        <SingleChats />
      </View>
    </View>
  );
};

export default MessageTab;

const styles = StyleSheet.create({
  messageSearchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: AppColors.White,
  },
  messageText: {
    fontSize: 24,
    fontWeight: "700",
  },
  IconButtonWrapper: {
    flexDirection: "row",
  },
  iconExbtnstyle: {
    marginRight: 10,
  },
  storiesContentWrapper: {
    marginTop: 8,
    marginBottom: 2,
    paddingLeft: 5,
    height: 100,
    borderColor: AppColors.Gray,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingTop: 5,
    backgroundColor: AppColors.White,
    marginTop: 2,
  },
  storyContainer: {
    marginRight: 5,
  },
  story: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.LightGray,
    borderRadius: 100,
  },

  addWrapper: {
    position: "absolute",
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.primary,
    bottom: 0,
    right: 0,
    borderRadius: 100,
  },
  chatWrapper: {
    backgroundColor: AppColors.White,
    paddingTop: 10,
  },
});
