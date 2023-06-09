import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const OTP = () => {
  return (
    <View>
      <View style={styles.container}></View>
      <View></View>
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
          <Text style={styles.header}>Enter 6 Digits Code</Text>
          <Text style={{ color: "#E0E0E0" }}>
            Enter the 6 digits code that you received on your email.
          </Text>
        </View>
       <View style={{margin:'5%'}}>
       <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "#C1BFBF",
              borderRadius: 5,
              height: 45,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.header2}>2</Text>
          </View>
          <View
            style={{
              backgroundColor: "#C1BFBF",
              borderRadius: 5,
              height: 45,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.header2}>2</Text>
          </View>
          <View
            style={{
              backgroundColor: "#C1BFBF",
              borderRadius: 5,
              height: 45,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.header2}>2</Text>
          </View>
          <View
            style={{
              backgroundColor: "#C1BFBF",
              borderRadius: 5,
              height: 45,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.header2}>2</Text>
          </View>
          <View
            style={{
              backgroundColor: "#C1BFBF",
              borderRadius: 5,
              height: 45,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.header2}>2</Text>
          </View>
          <View
            style={{
              backgroundColor: "#C1BFBF",
              borderRadius: 5,
              height: 45,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.header2}>2</Text>
          </View>
        </View>
       </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.Buttontext}>{"Continue"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    height: "50%",
  },
  header: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
    padding: "2%",
  },
  header2: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  Button: {
    width: "40%",
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
