import { View, Text, StyleSheet,Image,TouchableOpacity } from "react-native";
import React from "react";
import Home  from "../assets/Home.png";
import Profile from "../assets/User.png";
import Settings from "../assets/Setting.png";

const Footer = () => {
  return (
    <View style={styles.footerbox}>
    <TouchableOpacity>
      <View style={styles.footerCleck}>
      <Image source={Profile} style={styles.icon}></Image>
        <Text style={styles.footerText}>Profile</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.footerCleck}>
      <Image source={Home} style={styles.icon}></Image>
        <Text style={styles.footerText}>Home</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.footerCleck}>
      <Image source={Settings} style={styles.icon}></Image>
        <Text style={styles.footerText}>Settings</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerbox: {
    marginTop:675,
    height: 100,
    backgroundColor: "white",
    color:'red',
    justifyContent:"center",
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20
    
  },
  footerCleck:{
    justifyContent:"center",
    alignItems:'center',
  },
  icon:{
    
  },
  footerText:{
    fontSize:20,
  }
});