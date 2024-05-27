import { View, Text, StyleSheet, ScrollView } from "react-native";
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
      <Text style={s.title}>Choisissez votre régime 🍽️</Text>
      <Text style={s.subtitle}>
        Partagez vos objectifs et laissez BeFit personnaliser votre
        expérience ! 🎯 
      </Text>
      <View style={s.dietType}>
        <ScrollView horizontal>
          {DietType.map((diet) => (
            <Chip
              title={diet.label}
              key={diet.id}
              type={diet.id === selectDietType ? "outline" : "solid"}
              onPress={() => handlePressDietType(diet)}
              containerStyle={{ marginHorizontal: 5 }}
            />
          ))}
        </ScrollView>
      </View>
      <Button
        title="Continuer"
        type="outline"
        onPress={handleOnPress}
        buttonStyle={{
          borderRadius: 20,
          paddingVertical: 15,
          paddingHorizontal: 40,
        }}
        containerStyle={{
          alignSelf: "flex-end",
          marginTop: 30,
        }}
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
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#555",
    textAlign: "left",
    marginBottom: 20,
  },
});
