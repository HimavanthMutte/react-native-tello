import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImageContainer: {
    ...StyleSheet.absoluteFill,
    height: undefined,
    width: undefined,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFill,
    height: undefined,
    width: undefined,
    backgroundColor: "black",
    opacity: 0.25,
  },
});

export default styles;
