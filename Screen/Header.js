import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../Component/Button";
import moment from 'moment';


const time = moment().format("h:mm a");


const Header = () => {
  return (
    <View style={styles.headerbox}>
      <View style={styles.itembox}>
        <View style={styles.logo}>
          <Text>Logo</Text>
        </View>

        <View style={{ flexDirection:'row'}}>
          <Text style={styles.text}>Save Your journey..😊!</Text>
          <Text style={{fontSize:14,fontWeight:"600"}}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerbox: {
    marginTop: "10%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
  },
  itembox: {
    flexDirection: "row",
    justifyContent: "space-between",
padding:10
  },
  text: {
    fontSize: 21,
    marginRight:15,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight:'700'
  },
  logo: {
    height: 40,
    width: 40,
    marginTop: -5,
    marginLeft: 10,
    borderRadius: 20,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonBox: {
    flexDirection: "row",
  },
  buttonBar: {
    height: 2,
    backgroundColor: "black",
    marginTop: 3,
    marginRight: 7,
    marginLeft: 7,
  },
});
