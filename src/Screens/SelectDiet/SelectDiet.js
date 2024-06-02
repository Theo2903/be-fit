import { View, Text, StyleSheet, Image } from "react-native";
import { Container } from "../../Components/Container/Container";
import { Chip } from "react-native-elements";
import { useRecoilState } from "recoil";
import { selectedDietTypeState } from "../../../recoil/RecoilState";
import DietType from "../../../data/DietType.json";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const SelectDiet = () => {
  const [selectDietType, setSelectedDietType] = useRecoilState(
    selectedDietTypeState
  );
  const navigation = useNavigation();

  const handlePressDietType = (diet) => {
    setSelectedDietType(diet.id);
  };

  const handleOnPress = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <Container>
      <View style={[s.header]}>
        <Text style={s.title}>Quel est votre objectif  🍽️</Text>
        <Text style={s.subtitle}>
          Partagez vos objectifs et laissez BeFit personnaliser votre
          expérience ! 🎯
        </Text>
      </View>
      <View style={s.dietType}>
        {DietType.map((diet) => (
          <View key={diet.id} style={[s.chipContainer,  { backgroundColor: diet.id === selectDietType ? "#1a7a7a" : "#30d6d6" }] }>
            <Image
              source={{
                uri: diet.image,
              }}
              style={s.image}
            />
            <Chip
              title={diet.label}
              type="solid"
              onPress={() => handlePressDietType(diet)}
              containerStyle={s.chipStyle}
              buttonStyle={[
                s.chipButton,
                { backgroundColor: diet.id === selectDietType ? "#1a7a7a" : "#30d6d6" }
              ]}
              titleStyle={s.chipTitle}
            />
          </View>
        ))}
      </View>
      <Button
        title="Continuer"
        type="solid"
        onPress={handleOnPress}
        buttonStyle={s.continueButton}
        containerStyle={s.continueButtonContainer}
      />
    </Container>
  );
};

const s = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: -10,
  },
  image: {
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#555",
    textAlign: "left",
    fontStyle: "italic",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  dietType: {
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chipContainer: {
    height: '30%',
    width: "100%",
    marginBottom: 10,
    borderRadius: 20,

  },
  chipStyle: {
    width: "100%",
  },
  chipButton: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 30,
    borderRadius: 20,
    backgroundColor: "#30d6d6",
  },
  chipTitle: {
    fontSize: 18,
    color: "#fff",
  },
  continueButton: {
    borderRadius: 20,
    paddingVertical: 15,
    backgroundColor: "#30d6d6",
  },
  continueButtonContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default SelectDiet;
