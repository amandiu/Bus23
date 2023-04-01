import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../Component/Button";

const Header = () => {
  return (
    <View style={styles.headerbox}>
      <View style={styles.itembox}>
        <View>
          <View style={styles.logo}>
          <Text>Logo</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>Save Your journey..</Text>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <Button title="OnWay" />
        <Button title="UpComing" />
        <Button title="OthersInfo" />
      </View>
      <View style={styles.buttonBar}></View>
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
  itembox:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10
  },
  text:{
    fontSize:20,
    marginRight:35,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
   
  },
  logo:{
    height:40,
    width:40,
    marginTop:-5,
    marginLeft:10,
    borderRadius:20,
    borderColor:'black',
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'black'
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
