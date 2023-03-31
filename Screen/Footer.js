import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footerbox}>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerbox: {
    height: 100,
    backgroundColor: "red",
    color:'red',
    justifyContent:"center",
    alignItems:'center'
  },
});
