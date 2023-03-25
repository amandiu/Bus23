import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Screen/Homepage";
import Constants from 'expo-constants';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Navigation />
    </View>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:1
  },
});
