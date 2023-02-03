import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { WIDTH } from "../utils/AppDimension";

import { AppColors } from "../utils/AppColors";
import { tabIconData } from "../data/TabIconData";

const CustomeTabBar = ({ _selectTab, selectedtab }) => {
  return (
    <View
      style={[
        styles.container,
        selectedtab !== "Home" && { height: 65, paddingBottom: 0 },
      ]}
    >
      {tabIconData.map((tabdata) => {
        return (
          <TouchableOpacity
            key={tabdata.id}
            onPress={() => _selectTab(tabdata.tabname)}
          >
            <Image
              source={tabdata.icon}
              style={[
                styles.iconImgStyle,
                tabdata.isBig == true ? {} : { width: 26 },
                tabdata.tabname == selectedtab && {
                  tintColor: AppColors.primary,
                },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomeTabBar;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: AppColors.Gray,
    backgroundColor: AppColors.White,
  },
  iconImgStyle: {
    width: 22,
    height: 22,
  },
});
