// UI & Component
import { StyleSheet } from "react-native";
// Navigation
import { useNavigation } from "@react-navigation/native";
// Assets
import Icon from "react-native-vector-icons/FontAwesome5";

export const BackButton = ({ style }) => {
  const navigation = useNavigation();
  return (
    <Icon
      name="chevron-left"
      size={30}
      color="#000"
      solid={false}
      weight="light"
      style={[s.iconStyle, style]}
      onPress={() => navigation.goBack()}
    />
  );
};

const s = StyleSheet.create({
  iconStyle: {
    fontSize: 20,
    color: "#1C1D1D",
  },
});
