import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Screen/Homepage";
import Maps from "./Screen/Maps";
import  Login  from "./Component/Login";
import Reset_password from'./Component/forgot_Password/Reset_password';
import OTP from './Component/forgot_Password/OTP'




const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Reset_password/>
    </View>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Homepage"
          component={Homepage}
        />
        <Stack.Screen name="Mappages" component={Maps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:"1%",
  },
});
