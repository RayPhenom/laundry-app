import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";

const HomeScreen = () => {
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "loading your location"
  );
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
        longitude,
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
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>

        <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={{
              uri: "https://yt3.ggpht.com/yti/ANjgQV8zYWJBa7I1UWG0kgKNpkk4yNjlax9VeeeKjIsoM4JHigAP=s88-c-k-c0x00ffffff-no-rj",
            }}
          />
        </Pressable>
      </View>
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderColor: "#C0C0C0",
          borderWidth: 0.8,
          borderRadius: 7,
        }}
      >
        <TextInput placeholder="Search for laundry items" />
        <Feather name="search" size={24} color="#fd5c63" />
      </View>
      <Carousel />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
