//Autheur: Ardon 
//Date: 14.05.2024
//Get Started Page
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
    <View style={s.container} testID="get-started-screen">
      <Container>
        <LottieView source={HeroAnimation} style={s.animation} autoPlay loop />
      </Container>
      <View style={s.drawer}>
        <Container sty>
          <View>
            <Text style={{ fontSize: 35 }}>
              Bienvenue sur BeFit ! 🎉
            </Text>
            <Text style={{ marginTop: 30, fontSize:'20px' }}>
              L'application qui vous aide à surveiller votre régime
              alimentaire en scannant vos aliments. Gardez un œil sur votre
              santé et atteignez vos objectifs nutritionnels facilement 🍎
            </Text>
          </View>
        </Container>
        <Button
          title="Commencer !"
          onPress={handleOnPressBegin}
          titleStyle={{ fontWeight: "bold", fontSize: 23, color:'white' }}
          buttonStyle={{
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor:'#30d6d6',
          }}
          containerStyle={{
            width: "90%",
            alignSelf: "center",
            paddingBottom: 30
          }}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  container: {
    height: "100%",
    backgroundColor:'#30d6d6'
  },
  headerContainer: {
    alignItems: "center",
  },
  animation: {
    height: "100%",
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
