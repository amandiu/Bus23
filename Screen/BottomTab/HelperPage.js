import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const HelperPage = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.Maintext}>
        Do you want to pick up this passenger? Please press "YES" button if you
        want to take this passenger.
      </Text>
      <View style={styles.butonBox}>
        <TouchableOpacity
          // onPress={()=>{
          //         navigation?.navigate("Registration")
          //       }}
          style={styles.Button}
        >
          <Text style={styles.Buttontext}>{"Yes"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={()=>{
          //         navigation?.navigate("Registration")
          //       }}
          style={styles.Button}
        >
          <Text style={styles.Buttontext}>{"No"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelperPage;

const styles = StyleSheet.create({
  login: {
    height: 350,
    paddingHorizontal: 20,
    paddingVertical: 25,
    width: "90%",
    backgroundColor: "#9B9898",
    alignItems: "center",
    marginTop:'20%',
    margin: "5%",
    borderRadius: 15,
    shadowColor: "#DFB8B8  ",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  butonBox: {
    flexDirection: "row",
    marginTop: "15%",
  },
  Maintext: {
    fontSize: 24,
    fontWeight: "800",
    color: "white",
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
    marginRight: "5%",
  },
  Buttontext: {
    fontSize: 20,
    fontWeight: "800",
    color: "white",
  },
});
