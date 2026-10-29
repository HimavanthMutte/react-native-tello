import { Text } from "react-native";
import styles from "./index.styles";

export default function Txt({ children, stylesTxt, ...restProps }: any) {
  return (
    <Text style={[styles.text, stylesTxt]} {...restProps}>
      {children}
    </Text>
  );
}
