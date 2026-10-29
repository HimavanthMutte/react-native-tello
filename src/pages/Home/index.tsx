import Txt from "@/components/Txt";
import { View } from "react-native";
import styles from "./index.styles";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.basicWeatherContainer}>
        <Txt>Basic Weather Info</Txt>
      </View>
      <View style={styles.searchBarContainer}>
        <Txt>Search Bar</Txt>
      </View>
      <View style={styles.advanceInfoContainer}>
        <Txt>Advance Info</Txt>
      </View>
    </View>
  );
}
