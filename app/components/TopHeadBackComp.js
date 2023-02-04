import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppColors } from "../utils/AppColors";

const TopHeadBackComp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={22}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.nameText}>Akash</Text>
    </View>
  );
};

export default TopHeadBackComp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: AppColors.White,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  nameText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});
