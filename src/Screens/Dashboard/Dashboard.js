import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Container } from "../../Components/Container/Container";
import { SearchBar, Chip } from "react-native-elements";
import { useEffect, useState } from "react";
import DietType from "../../../data/DietType.json";
import { useRecoilState } from "recoil";
import { selectedDietTypeState } from "../../../recoil/RecoilState";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCard";
import Recipies from "../../../data/Recipies.json";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(["haram", "harss", "goat"]);
  const [searchedList, setSearchedList] = useState([]);
  const [selectDietType, setSelectedDietType] = useRecoilState(
    selectedDietTypeState
  );

  const navigation = useNavigation();

  useEffect(() => {
    const filteredList = list.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    setSearchedList(filteredList);
  }, [search]);

  const handlePressDietType = (diet) => {
    setSelectedDietType(diet.id);
  };

  const handleNavigateRecipes = (recipe) => {
    navigation.navigate("RecipeDetail", {
      recipeId: recipe,
    });
  };

  return (
    <Container>
      <View style={s.navigationBarArea}>
        <TouchableOpacity>
          <Ionicons name="menu" style={s.icon} />
        </TouchableOpacity>
        <Text>Be-Fit</Text>
        <TouchableOpacity>
          <Ionicons name="notifications" style={s.icon} />
        </TouchableOpacity>
      </View>
      <View style={s.searchBarArea}>
        <SearchBar
          containerStyle={{ backgroundColor: "#f2f2f2" }}
          platform="ios"
          placeholder="Recherche"
          value={search}
          onChangeText={(e) => setSearch(e)}
        />
      </View>
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
      <View style={s.recipeSection}>
        <Text style={s.sectionTitleText}>Recettes</Text>
        <ScrollView horizontal>
          {Recipies.filter((recipe) => recipe.diet_type === selectDietType).map(
            (recipe) => (
              <RecipeCard
                title={recipe.title}
                key={recipe.id}
                description={recipe.description}
                calories={recipe.calories}
                onPress={() => handleNavigateRecipes(recipe.id)}
                imageSource={recipe.image_url}
              />
            )
          )}
        </ScrollView>
      </View>
    </Container>
  );
};

const s = StyleSheet.create({
  navigationBarArea: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBarArea: {
    height: 60,
  },
  mealListArea: {
    backgroundColor: "black",
  },
  dietType: {
    paddingTop: 30,
  },
  recipeSection: {
    paddingTop: 20,
  },
  sectionTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  navigationBarArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 60,
  },
  icon: {
    fontSize: 24,
  },
});
