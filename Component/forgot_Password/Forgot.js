import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Fogtog = () => {
  return (
    <View>
      <View style={styles.container}></View>
      <View
        style={{
          width: "90%",
          backgroundColor: "#9B9898",
          margin: "5%",
          padding: "2%",
          borderRadius:15,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.header}>Forgot Password</Text>
          <Text style={{ color: "#E0E0E0" }}>
            Enter your email for the verification proccess,We will send 6 digits
            code to your email.
          </Text>
        </View>
        <Text style={styles.header2}>E-mail</Text>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor={"white"}
          style={{
            width: "90%",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 10,
            marginBottom:20,
            paddingHorizontal: 10,
          }}
        />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.Buttontext}>{"Continue"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Fogtog;

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
    padding: "2%",
    marginBottom:10,
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
    marginBottom:15
  },
  Buttontext: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
