import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerbox}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerbox: {
    marginTop: "10%",
    height: 50,
    backgroundColor:'white',
    borderRadius:5,
    
  },
});
