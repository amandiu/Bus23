import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Login = () => {
  return (
    <View
      style={{
        marginVertical: "40%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <View style={styles.login}>
        <Text
          style={{
            marginBottom: "2%",
            fontWeight: "900",
            fontSize: 28,
            color: "white",
          }}
        >
          Login
        </Text>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: "white",
            marginBottom: "2%",
          }}
        ></View>
        <View style={styles.Stext}>
          <Ionicons name="mail-outline" size={22} color="white" />
          <TextInput
            placeholder="email"
            placeholderTextColor={"white"}
            style={{
              width: "90%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              marginLeft: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View style={styles.Stext}>
          <Ionicons name="lock-closed-outline" size={22} color="white" />
          <TextInput
            placeholder="password"
            placeholderTextColor={"white"}
            style={{
              width: "90%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              marginLeft: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View style={styles.Stexts}>
          <View>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.Buttontext}>{"Forgot Password?"}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.Buttontext}>{"Login"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    height: 350,
    width: "90%",
    backgroundColor: "#9B9898",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
    borderRadius: 15,
    shadowColor: "#DFB8B8  ",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  Stext: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  Stexts: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    justifyContent: "space-between",
  },
  Button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#6D6B6B",
    paddingHorizontal: 12,
    margin: "3%",
    marginLeft: "-0.5%",
  },
  Buttontext: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
