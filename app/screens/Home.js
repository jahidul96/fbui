import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import HomeTopBar from "../components/HomeTopBar";
import { TabBar } from "../components/TabBar";
import CustomeTabBar from "../components/CustomeTabBar";
import HomePostComp from "../components/HomePostComp";
import { AppColors } from "../utils/AppColors";
import AllPosts from "../components/AllPosts";
import FriendTabContent from "../tabContent/FriendTabContent";
import MessageTab from "../tabContent/MessageTab";

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

      {/* profile post content */}
      <ScrollView>
        {selectedtab == "Home" ? (
          // home content
          <View style={styles.homeContentWrapper}>
            <HomePostComp />
            <View style={styles.postcontentWrapper}>
              <AllPosts />
            </View>
          </View>
        ) : selectedtab == "friends" ? (
          // friends content
          <FriendTabContent />
        ) : selectedtab == "message" ? (
          // message tab
          <MessageTab />
        ) : (
          <></>
        )}
      </ScrollView>
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
    backgroundColor: "#000",
  },
  postcontentWrapper: {
    marginTop: 5,
  },
  messageTabWrapper: {
    backgroundColor: AppColors.LightGray,
    flex: 1,
  },
});
