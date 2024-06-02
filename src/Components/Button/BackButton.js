// UI & Component
//Autheur: Salim
//Date: 14.05.2024
import { StyleSheet } from "react-native";
// Navigation
import { useNavigation } from "@react-navigation/native";
// Assets
import Icon from "react-native-vector-icons/FontAwesome5";

export const BackButton = ({ style }) => {
  const navigation = useNavigation();
  return (
    <Icon
      name="arrow-circle-left"
      size={100}
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
    fontSize: 35,
    color: "white",
  },
});
