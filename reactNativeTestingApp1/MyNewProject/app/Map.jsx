import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to grant location permissions to use this feature.', [{ text: 'OK' }]);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const ajmerCoordinates = [
    { latitude: 26.456, longitude: 74.639 },
    { latitude: 26.461, longitude: 74.645 },
    { latitude: 26.466, longitude: 74.650 },
    { latitude: 26.470, longitude: 74.655 },
    currentLocation
  ];

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: 26.456,
          longitude: 74.639,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        pitchEnabled={true}
        rotateEnabled={true}
        zoomEnabled={true}
      >
        {currentLocation && (
          <Polyline
            coordinates={ajmerCoordinates.filter(Boolean)}
            strokeColor="#000"
            strokeWidth={4}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: 607,
    width: 302,
    alignSelf: 'center',
  },
});
