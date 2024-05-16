// UI & Component
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import FoodAnimation from "../../../assets/animations/food_animation.json";

export const EmptyScreen = () => {
  return (
    <View style={s.container}>
      <LottieView source={FoodAnimation} style={s.animation} autoPlay loop />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingBottom: 200
  },
  animation: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
