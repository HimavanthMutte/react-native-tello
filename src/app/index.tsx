import { Image, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Background from "../../assets/background.png";
import Home from "../pages/Home";
import styles from "./index.styles";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={Background}
          style={[styles.backgroundImageContainer, styles.backgroundImage]}
        />
        <View style={styles.imageOverlay} />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
