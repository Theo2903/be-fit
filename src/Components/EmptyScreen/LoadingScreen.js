// UI & Component
//Autheur: Theo
//Date: 14.05.2024
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import LoadingAnimation from "../../../assets/animations/loading_animation.json";

export const LoadingScreen = () => {
  return (
    <View style={s.container}>
      <LottieView source={LoadingAnimation} style={s.animation} autoPlay loop />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingBottom: 200,
  },
  animation: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
