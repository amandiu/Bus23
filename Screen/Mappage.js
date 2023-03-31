import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const Mappage = () => {
  return (
    <View>
      <Text>asdfghj</Text>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Mappage;
