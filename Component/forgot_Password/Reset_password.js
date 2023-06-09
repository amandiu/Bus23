import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Reset_password = () => {
  return (
    <View>
      <View style={styles.container}></View>
      <View
        style={{
          width: "90%",
          backgroundColor: "#9B9898",
          margin: "5%",
          padding: "2%",
          borderRadius: 15,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.header}>Reset Password</Text>
          <Text style={{ color: "#E0E0E0" }}>
            Set the new password for your account so you can login and access
            all the features.
          </Text>
        </View>
        <Text style={styles.header2}>Password</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderColor: "white",
            justifyContent:'center',
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <TextInput
            placeholder="New-Password"
            placeholderTextColor={"white"}
            style={{
              width: "90%",
              marginLeft: 10,
              autoCompleteType: "password",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
          />
          <TouchableOpacity>
          <Ionicons name="eye" size={18} color="white" marginTop={5} marginRight = {10} />
          </TouchableOpacity>
        </View>
        <Text style={styles.header2}>Re-Password</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderColor: "white",
            justifyContent:'center',
            borderWidth: 1,
            borderRadius: 5
          }}
        >
          <TextInput
            placeholder="Re-New-Password"
            placeholderTextColor={"white"}
            style={{
              width: "90%",
              marginLeft: 10,
              autoCompleteType: "password",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
          />
          <TouchableOpacity>
          <Ionicons name="eye-off" size={18} color="white" marginTop={5} marginRight = {10} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center",marginTop:10 }}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.Buttontext}>{"Reset Password"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Reset_password;

const styles = StyleSheet.create({
  container: {
    height: "45%",
  },
  header: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
    padding: "2%",
  },
  header2: {
    fontSize: 20,
    marginTop:10,
    fontWeight: "600",
    color: "white",
    padding: "2%",
    marginBottom: 10,
  },
  Button: {
    width: "50%",
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
    marginBottom: 15,
  },
  Buttontext: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
