import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState("loading your location");
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service Disabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
      getCurrentLocation(); // Call after checking permission
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return; // Exit function if permission denied
    }

    const { coords } = await Location.getCurrentPositionAsync({}); // Inside function
    console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });

      //console.log(response);

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        setdisplayCurrentAddress(address);
      }
    }
  };

  return (
    <SafeAreaView>
      <View>
      <MaterialIcons name="location-on" size={24} color="black" />
        <Text>{displayCurrentAddress}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
