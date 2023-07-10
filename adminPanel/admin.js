import React from "react";
import { Text, SafeAreaView, View, StyleSheet, TextInput } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';



const admin = () => {
  const [text, onChangeText] = React.useState("Please input here");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.HeaderStyle}>Admin Page</Text>
        <View style={styles.mainStyle}>
          <View style={styles.Cardstyle}>
            <Text style={styles.InputteXt}>Bus Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
             <Text style={styles.InputteXt}>From Bus:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
             <Text style={styles.InputteXt}>To Bus:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <View style={styles.Cardstyle}>
          <Text style={styles.InputteXt}>Time:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
             <Text style={styles.InputteXt}>Date:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
             <Text style={styles.InputteXt}>Price:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 5,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  Cardstyle: {
    width: "48%",
    borderRadius: 5,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40%",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    margin: 7,
    padding:15
  },
  mainStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "98%",
  },
  mainStyles: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    margin: 7,
  },
  mainStyleAll: {
    height: "100%",
  },
  HeaderStyle: {
    fontSize:24,
    fontWeight:"800",
    paddingBottom:20    
  },
  InputteXt:{
    fontSize:18,
    fontWeight:"600",
    marginTop:10
  }
});

export default admin;
