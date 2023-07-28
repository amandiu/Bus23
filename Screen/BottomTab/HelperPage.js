import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const HelperPage = () => {
  return (
    <View style={styles.login}>
      <Text>HelperPage</Text>
    </View>
  );
};

export default HelperPage;

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
});
