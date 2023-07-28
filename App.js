import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "./Screen/Homepage";
import Notification from "./Screen/BottomTab/Notification";
import HelperPage from "./Screen/BottomTab/HelperPage";
import Maps from "./Screen/Maps";
import Ionic from "react-native-vector-icons/Ionicons";
import Admin from "./adminPanel/admin";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import UpComing from "./Screen/Upcaming";
import OnWay from "./Screen/OnWay";
import forgatePassword from "./Component/forgot_Password/Forgot";
import OTP from "./Component/forgot_Password/OTP";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./fireBase";
import { Title } from "react-native-paper";
// import HelperPage from "./Screen/BottomTab/HelperPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
      <TabNavigator />
    </NavigationContainer>
  );
};

// StackNavigator

function StackNavigator() {
  const [user, setUser] = useState(false);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  useEffect(() => {
    setLoader(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoader(false);
        setUser(user);
      } else {
        setLoader(false);
        setUser(null);
      }
    });
  }, []);
  if (loader) {
    return <Text>Loading</Text>;
  }

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Admin" component={Admin} />
      ) : (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Homepage"
          component={Homepage}
        />
      )}

      <Stack.Screen name="Mappages" component={Maps} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      {/* <Stack.Screen name="Bottombar" component={BottomBar} /> */}
      <Stack.Screen name="upcaming" component={UpComing} />
      <Stack.Screen name="OnWay" component={OnWay} />
      <Stack.Screen name="ForgatePassword" component={forgatePassword} />
      <Stack.Screen name="Otp" component={OTP} />
    </Stack.Navigator>
  );
}

// bottom navigation

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        // tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarShowLabel: true,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          }else if (route.name === "Helper") {
            iconName = focused ? "bus" : "bus-outline";
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={StackNavigator}
      />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen 
    
     name="Helper" component={HelperPage} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "1%",
  },
});
