import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "./Button";

//Date formate start

const date = new Date();
// This arrangement can be altered based on how we want the date's format to appear.
let currentdate = new Date().toJSON().slice(0, 10);

//Date formate End

//Time start

let time = date.getHours() + ":" + date.getMinutes();

const Card = () => {
  return (
    <View style={styles.Cardstyle}>
      <View style={styles.date}>
        <Text style={styles.dateText}>Date : {currentdate}</Text>
      </View>
      <View style={{ alignItems: "flex-end", marginRight: 15 }}>
        <Text style={styles.dateText}>{time}</Text>
      </View>

      <View style={styles.Cardbody}>
        <View style={{flex:2, marginTop: "-5%" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>BusName: Elish Bus</Text>
          <Text style={styles.dateText}>From : DIU Smart City</Text>
          <Text style={styles.dateText}>Price : 30 tk</Text>
        </View>

        <View style={{ marginLeft:'2%',flex:2,marginTop:"2%"}}>
          <Text style={styles.dateText}>To : Mirpur-1</Text>
          <Button title="See Location" />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Cardstyle: {
    backgroundColor: "white",
    borderRadius: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    margin: 7,
  },
  date: {
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontWeight: "400",
    color: "#A4A4A4",
    fontSize: 14,
    marginTop: 4,
  },
  Cardbody: {
    flexDirection: "row",
    padding:5,
  },
});
