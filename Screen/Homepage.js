import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Button from "../Component/Button";
import Card from "../Component/Card";
import Header from "../Component/Header";

const Homepage = ({ navigation }) => {
  return (
    <View>
      <Header />
      <View style={styles.buttonBox}>
        <Button
          onPress={() => {
            navigation.navigate("OnWay");
          }}
          title="OnWay"
        />
        <Button
          onPress={() => {
            navigation.navigate("upcaming");
          }}
          title="UpComing"
        />
        <Button
          onPress={() => {
            navigation.navigate("Registration");
          }}
          title="Admin LogIn"
        />
        {/* <Button
          onPress={() => {
            navigation.navigate("Login");
          }}
          title="Admin LogIn"
        /> */}
      </View>
      <View style={styles.buttonBar}></View>
      <ScrollView>
        <View style={{ marginBottom: "45%", marginTop: "1%" }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  buttonBox: {
    flexDirection: "row",
    backgroundColor: "#9B9898",
  },
  buttonBar: {
    height: 2,
    backgroundColor: "black",
    marginTop: 3,
    marginRight: 7,
    marginLeft: 7,
  },
});
