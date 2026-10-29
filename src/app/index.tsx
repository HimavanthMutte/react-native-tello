import { MeteoAPI } from "@/api/meteo";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Background from "../../assets/background.png";
import Home from "../pages/Home";
import styles from "./index.styles";

type Coords = {
  lat: number;
  lon: number;
};

export default function App() {
  const [coordinates, setCoordinates] = useState<Coords>();
  const [weather, setWeather] = useState<any>();
  useEffect(() => {
    async function getCoordinates() {
      const permissions = await Location.requestForegroundPermissionsAsync();
      if (permissions.status !== "granted") {
        setCoordinates({
          lat: 48.85,
          lon: 2.35,
        });
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    }
    getCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherDataByCoords();
    }
  }, [coordinates]);

  async function fetchWeatherDataByCoords() {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coordinates!);
    setWeather(weatherResponse);
  }
  console.log(weather);
  console.log(coordinates);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Image source={Background} style={styles.backgroundImageContainer} />
        <View style={styles.imageOverlay} />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
