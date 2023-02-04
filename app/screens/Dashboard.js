import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppColors } from "../utils/AppColors";
import TopHeadBackComp from "../components/TopHeadBackComp";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconButton from "../components/IconButton";
import { dasboardIcons } from "../data/dasIcons";
import { Image } from "react-native";

const personImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <TopHeadBackComp extraStyle={styles.extraTopBackStyle} text="Menu" />
        <IconButton icon={<Ionicons name="search" size={22} />} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* profile container */}
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileImWrapper}>
            <Image source={{ uri: personImg }} style={styles.imgStyle} />
          </View>
          <View>
            <Text style={styles.profileName}>Akash</Text>
            <Text>View your profile</Text>
          </View>
        </TouchableOpacity>
        {/* icon Containers */}
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
          }}
        >
          {dasboardIcons.map((data) => {
            return (
              <TouchableOpacity key={data.id} style={styles.iconWrapper}>
                <View style={styles.imgWrapper}>
                  <Image source={data.icon} style={styles.iconImgStyle} />
                </View>
                <Text style={styles.name}>{data.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  headContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  extraTopBackStyle: {
    width: "70%",
    paddingHorizontal: 0,
  },
  profileContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: AppColors.Gray,
    borderBottomWidth: 1,
  },
  profileImWrapper: {
    marginRight: 10,
  },
  imgStyle: {
    width: 38,
    height: 38,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconImgStyle: {
    width: "100%",
    height: "100%",
  },
  imgWrapper: {
    width: 25,
    height: 25,
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    marginLeft: 15,
    fontSize: 17,
  },
});
