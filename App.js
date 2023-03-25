import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Cart from "../Bus23/Component/Cart"

export default function App() {
  return (
    <View style={styles.container}>
      <Cart/>
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
  {
    /*
    
    const MyTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: 'transparent'
      },
    };

    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <stack.screen/>
      </Stack.Navigator>
    </NavigationContainer>

    */
  }
  return (
    <NavigationContainer>
     
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
