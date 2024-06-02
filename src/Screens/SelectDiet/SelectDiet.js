import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
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
      <Text style={s.title}>Quel est votre objectif  🍽️</Text>
      <Text style={s.subtitle}>
        Partagez vos objectifs et laissez BeFit personnaliser votre
        expérience ! 🎯 
      </Text>
      <ScrollView style={s.dietType}>
        {DietType.map((diet) => (
          <View key={diet.id} style={s.chipContainer}>
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
      </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginBottom: 20,
  },
  dietType: {
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#555",
    textAlign: "left",
    marginBottom: 20,
  },
  chipContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  chipStyle: {
    width: Dimensions.get("window").width - 50,  // Take full width with some padding
  },
  chipButton: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#30d6d6",  // Default background color
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
    width: "100%",
    marginTop: 30,
  },
});