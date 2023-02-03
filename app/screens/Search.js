import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import InputComp from "../components/InputComp";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Ionicons
          name="arrow-back"
          size={22}
          onPress={() => navigation.goBack()}
        />
        <InputComp
          placeholder="Search"
          extraInputStyle={styles.extraInputStyle}
        />
        <Ionicons name="search" size={28} />
      </View>

      {/* content */}
      <View style={styles.contentWrapper}>
        <Text style={styles.noSearch}>No Search Till now</Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: AppColors.White,
  },
  extraInputStyle: {
    flex: 1,
    borderRadius: 30,
    height: 35,
    marginHorizontal: 10,
  },
  contentWrapper: {
    paddingHorizontal: 15,
  },
  noSearch: {
    fontSize: 17,
    marginTop: 10,
  },
});
