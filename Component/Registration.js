import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Registration = () => {
  return (
    <View
      style={{
        marginVertical: "42%",
        justifyContent: "center",
        display: "flex"
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
          Registration
        </Text>
        <View style={styles.Stext}>
          <Text
            style={{
              marginBottom: "2%",
              marginLeft: "2%",
              fontWeight: "600",
              color: "white",
            }}
          >
            Full Name
          </Text>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={"white"}
            style={{
              width: "90%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View style={styles.Stext}>
          <Text
            style={{
              marginBottom: "2%",
              marginLeft: "2%",
              fontWeight: "600",
              color: "white",
            }}
          >
            Email
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"white"}
            style={{
              width: "90%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View style={styles.Stext}>
          <Text
            style={{
              marginBottom: "2%",
              marginLeft: "2%",
              fontWeight: "600",
              color: "white",
            }}
          >
            Password
          </Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor={"white"}
            style={{
              width: "90%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View style={styles.Stext}>
          <Text
            style={{
              marginBottom: "2%",
              marginLeft: "2%",
              fontWeight: "600",
              color: "white",
            }}
          >
            Confirm Password
          </Text>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={"white"}
            style={{
              width: "90%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.Buttontext}>{"Create Account"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Stexts}>
          <View style={{ marginRight: 10 }}>
            <Text style={styles.Buttontext}>{"Already have an account?"}</Text>
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

export default Registration;

const styles = StyleSheet.create({
  login: {
    height: 500,
    width: "90%",
    backgroundColor: "#9B9898",
    paddingHorizontal:15,
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
    marginBottom: 5,
  },
  Stexts: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
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
