import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import IconButton from "../components/IconButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import AllPosts from "../components/AllPosts";
import { videoScrollTabItems } from "../data/TabIconData";

const VideoTabContent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.White,
      }}
    >
      {/* top icon and text content */}
      <View style={styles.friendTextContainer}>
        <Text style={styles.friendText}>Videos</Text>
        <View style={styles.topIconWrapper}>
          <IconButton icon={<Ionicons name="person" size={24} />} />
          <View style={styles.middleIcon}>
            <IconButton icon={<Ionicons name="download" size={24} />} />
          </View>
          <IconButton icon={<Ionicons name="search" size={24} />} />
        </View>
      </View>

      <ScrollView
        style={{
          paddingTop: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* tab conetnt */}
        <View style={styles.tabMainWrapper}>
          <ScrollView horizontal>
            {videoScrollTabItems.map((data) => {
              return (
                <TouchableOpacity
                  key={data.id}
                  style={[
                    styles.tabStyle,
                    data.id == activeTab && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab(data.id)}
                >
                  <Text>{data.icon}</Text>
                  <Text style={styles.tabName}>{data.tabname}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* postContent  */}

        <AllPosts type={"video"} />
      </ScrollView>
    </View>
  );
};

export default VideoTabContent;

const styles = StyleSheet.create({
  friendTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: AppColors.White,
    height: 55,
  },

  friendText: {
    fontSize: 24,
    fontWeight: "700",
  },
  topIconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  middleIcon: {
    marginHorizontal: 10,
  },
  tabMainWrapper: {
    height: 55,
    justifyContent: "center",
    backgroundColor: AppColors.White,
    borderBottomColor: AppColors.Gray,
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
  tabStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: AppColors.LightGray,
    marginRight: 10,
    height: 35,
    borderRadius: 20,
  },
  tabName: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 4,
  },
  activeTab: {
    backgroundColor: AppColors.LightBlue,
  },
});
