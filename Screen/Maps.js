import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import Button from "../Component/Button";
import { useState } from "react";

const Maps = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 23.8103,
    longitude: 90.4125,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  return (
    <View style={styles.container}>
      <View style={styles.mapbox}>
        <MapView style={styles.map} region={mapRegion} />
      </View>
      <View style={{ height: 40, width: 150 }}>
        <Button title="Book" />
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapbox: {
    width: "98%",
    height: "80%",
    borderRadius: 10,
    borderWidth:2,
    justifyContent: "center",
    alignItems: "center",
  },
  map:{
    width: "99%",
    height: "99%",
  }
});
