// UI & Component
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import FoodAnimation from "../../../assets/animations/food_animation.json";
import { Button } from "react-native-elements";

export const EmptyScreen = ({ btnLabel, onPress }) => {
  return (
    <View style={s.container}>
      <LottieView source={FoodAnimation} style={s.animation} autoPlay loop />
      {btnLabel && (
        <Button
          title={btnLabel}
          type="outline"
          style={s.btn}
          onPress={onPress}
        />
      )}
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
  btn: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
