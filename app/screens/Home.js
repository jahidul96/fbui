import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HomeTopBar from "../components/HomeTopBar";
import { TabBar } from "../components/TabBar";
import CustomeTabBar from "../components/CustomeTabBar";
import HomePostComp from "../components/HomePostComp";
import { AppColors } from "../utils/AppColors";
import AllPosts from "../components/AllPosts";
import FriendTabContent from "../tabContent/FriendTabContent";
import MessageTab from "../tabContent/MessageTab";
import NotificationTabContent from "../tabContent/NotificationTabContent";
import VideoTabContent from "../tabContent/VideoTabContent";
import MarketPlaceTabContent from "../tabContent/MarketPlaceTabContent";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import AddStoryComp from "../components/AddStoryComp";

const Home = ({}) => {
  const [selectedtab, setSelectedtab] = useState("Home");

  const _selectTab = (tabname) => {
    setSelectedtab(tabname);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
      {/* logobar content */}
      {selectedtab == "Home" && <HomeTopBar />}

      {/* tabbar  */}
      <CustomeTabBar _selectTab={_selectTab} selectedtab={selectedtab} />

      {/*  content */}
      {selectedtab == "Home" ? (
        // home content
        <ScrollView>
          <View style={styles.homeContentWrapper}>
            <HomePostComp />
            {/* stories container */}
            <AddStoryComp />

            {/* post content */}
            <View style={styles.postcontentWrapper}>
              <AllPosts type="post" />
            </View>
          </View>
        </ScrollView>
      ) : selectedtab == "friends" ? (
        // friends content
        <FriendTabContent />
      ) : selectedtab == "message" ? (
        // message tab
        <MessageTab />
      ) : selectedtab == "notification" ? (
        <NotificationTabContent />
      ) : selectedtab == "video" ? (
        <VideoTabContent />
      ) : (
        <MarketPlaceTabContent />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.LightGray,
  },
  homeContentWrapper: {
    backgroundColor: AppColors.Gray,
  },
  postcontentWrapper: {
    marginTop: 4,
  },
  messageTabWrapper: {
    backgroundColor: AppColors.LightGray,
    flex: 1,
  },
});
