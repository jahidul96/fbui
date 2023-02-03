import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AppColors } from "../utils/AppColors";
import IconButton from "../components/IconButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import MarketPlaceItem from "../components/MarketPlaceItem";
import { WIDTH } from "../utils/AppDimension";
import { productdata } from "../data/productData";

const tabDatas = [
  {
    id: 1,
    name: "Inbox",
  },
  {
    id: 2,
    name: "Sell",
  },
  {
    id: 3,
    name: "Categories",
  },
  {
    id: 4,
    name: "Search",
  },
];

const MarketPlaceTabContent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.White,
      }}
    >
      <View style={styles.friendTextContainer}>
        <Text style={styles.friendText}>MarketPlace</Text>
        <IconButton icon={<Ionicons name="search" size={24} />} />
      </View>

      <ScrollView>
        {/* tab conetnt */}
        <View style={styles.tabMainWrapper}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              height: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={[styles.ownTab]}>
              <Ionicons name="person" size={20} />
            </TouchableOpacity>
            {tabDatas.map((data) => {
              return (
                <TouchableOpacity key={data.id} style={[styles.tabStyle]}>
                  <Text style={styles.tabName}>{data.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* content */}
        <View style={styles.marketplaceItemcontainer}>
          {productdata.map((data) => (
            <MarketPlaceItem key={data.id} product={data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MarketPlaceTabContent;

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
  tabMainWrapper: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.White,
    borderBottomColor: AppColors.Gray,
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingBottom: 5,
  },
  ownTab: {
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 0,
    backgroundColor: AppColors.LightGray,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: -5,
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
  marketplaceItemcontainer: {
    width: WIDTH,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: AppColors.White,
    justifyContent: "space-between",
  },
});
