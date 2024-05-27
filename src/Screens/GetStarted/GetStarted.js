import { View, Text, StyleSheet } from "react-native";
import { Container } from "../../Components/Container/Container";
import LottieView from "lottie-react-native";
import HeroAnimation from "../../../assets/animations/hero_animation.json";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const GetStarted = () => {
  const navigation = useNavigation();
  const handleOnPressBegin = () => {
    navigation.navigate("SelectDiet");
  };
  return (
    <View style={s.container}>
      <Container>
        <View style={s.headerContainer}>
          <Text style={s.title}>BeFit</Text>
        </View>
        <LottieView source={HeroAnimation} style={s.animation} autoPlay loop />
      </Container>
      <View style={s.drawer}>
        <Container>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
              Bienvenue sur BeFit !
            </Text>
            <Text style={{ marginTop: 20 }}>
              BeFit est une application qui vous aide à surveiller votre régime
              alimentaire en scannant vos aliments. Gardez un œil sur votre
              santé et atteignez vos objectifs nutritionnels facilement avec
              BeFit.
            </Text>
          </View>
        </Container>
        <Button
          title="Commencer !"
          type="outline"
          onPress={handleOnPressBegin}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          buttonStyle={{
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 40,
          }}
          containerStyle={{
            width: "80%",
            alignSelf: "center",
            marginTop: 30,
          }}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  container: {
    height: "100%",
  },
  headerContainer: {
    alignItems: "center",
  },
  animation: {
    height: "50%",
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  drawer: {
    height: "50%",
    backgroundColor: "#FFFF",
    borderColor: "#FFFF",
    borderWidth: 5,
    borderRadius: 30,
    paddingVertical: 20,
  },
});
