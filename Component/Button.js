import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title,
  onPress}) => {
  return (
    <TouchableOpacity style={styles.Button }  onPress={onPress?onPress:()=>{}}>
      <Text style={styles.Buttontext}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems:"center",
    paddingVertical: 8,
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  Buttontext: {
    fontSize: 16,
    fontWeight: "700",
  },
});
