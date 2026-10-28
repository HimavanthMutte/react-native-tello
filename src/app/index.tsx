import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "../pages/Home";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
