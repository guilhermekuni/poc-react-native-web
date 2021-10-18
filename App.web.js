import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import MapView from "react-native-maps";

function App() {
  return (
    <View>
      <h1>Hello world from react native!!!</h1>
      <h2>TST2</h2>
      <ActivityIndicator />
      <View style={{ height: 200, width: 200 }}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </View>
  );
}

export default App;
