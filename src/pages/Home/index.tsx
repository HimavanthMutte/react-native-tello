import { Text, View } from "react-native";

import styles from "./index.styles";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.basicWeatherContainer}>
        <Text style={styles.text}>Basic Weather Info</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <Text style={styles.text}>Search Bar</Text>
      </View>
      <View style={styles.advanceInfoContainer}>
        <Text style={styles.text}>Advance Info</Text>
      </View>
    </View>
  );
}
