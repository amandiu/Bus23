import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "./Button";
import moment from "moment";

//Date formate start

const date = moment().format("MM-Do-YYYY");

//Date formate End

//Time start
const time = moment().format("h:mm a");
// Time End

const Card = () => {
  return (
    <View style={styles.Cardstyle}>
      <View style={styles.date}>
        <Text style={styles.dateText}>Date : {date}</Text>
      </View>
      <View style={{ alignItems: "flex-end", marginRight: 15 }}>
        <Text style={styles.dateText}>{time}</Text>
      </View>

      <View style={styles.Cardbody}>
        <View style={{ flex: 2, marginTop: "-5%" }}>
          <Text style={{ fontSize: 18, marginTop: "2.5%", fontWeight: "700" }}>
            BusName: Elish Bus
          </Text>
          <Text style={styles.dateText}>From : DIU Smart City</Text>
          <Text style={styles.dateText}>To : Mirpur-1</Text>
        </View>

        <View style={{ marginLeft: "2%", flex: 2, marginTop: "2%" }}>
          <Text style={styles.dateText}>Price : 30 tk</Text>
          <View style={{ height: 40, width: 130, marginTop: 10 }}>
            <Button title="See Location" />
          </View>
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
    padding: 10,
  },
});
