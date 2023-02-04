import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AppColors } from "../../utils/AppColors";
import InputComp from "../../components/InputComp";
import TextButton from "../../components/TextButton";

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.White,
        paddingHorizontal: 5,
      }}
    >
      <StatusBar backgroundColor={AppColors.White} barStyle="dark-content" />
      <View style={styles.topContainer}>
        <Text style={styles.facebook}>Facebook</Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Mobile number or email</Text>
        <InputComp
          placeholder="number/email"
          extraInputStyle={styles.extraInputStyle}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Password</Text>
        <InputComp
          placeholder="password"
          extraInputStyle={styles.extraInputStyle}
        />
      </View>

      <TextButton
        text="Login"
        extraStyle={styles.extraBtnStyle}
        extraTextStyle={styles.extraTextStyle}
      />

      <TouchableOpacity
        style={{
          marginTop: 10,
        }}
      >
        <Text style={[styles.label, { color: AppColors.primary }]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: AppColors.Gray,
    borderBottomWidth: 1,
  },
  facebook: {
    fontSize: 16,
  },
  inputWrapper: {
    width: "100%",
    marginTop: 15,
  },
  label: {
    fontSize: 17,
  },
  extraInputStyle: {
    height: 38,
    marginTop: 8,
    borderRadius: 2,
  },
  extraBtnStyle: {
    borderRadius: 2,
    marginTop: 10,
    backgroundColor: AppColors.primary,
  },
  extraTextStyle: {
    color: AppColors.White,
  },
});
