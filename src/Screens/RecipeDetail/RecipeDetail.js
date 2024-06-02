import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Container } from "../../Components/Container/Container";
import { BackButton } from "../../Components/Button/BackButton";
import CircularProgress from "react-native-circular-progress-indicator";
import { useRoute } from "@react-navigation/native";
import Recipes from "../../../data/Recipies.json";

export const RecipeDetail = () => {
  const route = useRoute();
  const id = route.params?.recipeId;

  const currentRecipe = Recipes.find((recipe) => recipe.id === id);

  return (
    <View style={s.container}>
      <BackButton  style={{position: 'absolute', zIndex: 100, top: 50, left: 10}}/>
          <Image
            source={{
              uri: currentRecipe.image_url,
            }}
            style={s.image}
          />
      <View style={s.recipiesDrawer}>
        <Container>
          <ScrollView>
            <View>
            <Text style={s.recipeTitle}>{currentRecipe.title}</Text>
              <View style={s.chartContainer}>
                
                <CircularProgress
                  value={currentRecipe.calories}
                  radius={90}
                  progressValueColor={"black"}
                  activeStrokeColor={'#30d6d6'}
                  inActiveStrokeColor={'#30d6d6'}
                  inActiveStrokeOpacity={0.2}
                  color
                  maxValue={1000}
                  title={"CAL"}
                  titleColor={"black"}
                  titleStyle={{ fontWeight: "bold" }}
                />
                <View style={s.macroChartContainer}>
                  <View style={s.macroContainer}>
                    <CircularProgress
                      value={currentRecipe.proteins}
                      valueSuffix={"g"}
                      activeStrokeColor={'#30d6d6'}
                      inActiveStrokeColor={'#30d6d6'}
                      inActiveStrokeOpacity={0.2}
                      radius={25}
                    />
                    <Text style={s.macroText}>Proteine</Text>
                  </View>
                  <View style={s.macroContainer}>
                    <CircularProgress
                      value={currentRecipe.lipids}
                      valueSuffix={"g"}
                      activeStrokeColor={'#30d6d6'}
                      inActiveStrokeColor={'#30d6d6'}
                      inActiveStrokeOpacity={0.2}
                      radius={25}
                    />
                    <Text style={s.macroText}>Lipide</Text>
                  </View>
                  <View style={s.macroContainer}>
                    <CircularProgress
                      value={currentRecipe.carbohydrate}
                      valueSuffix={"g"}
                      activeStrokeColor={'#30d6d6'}
                      inActiveStrokeColor={'#30d6d6'}
                      inActiveStrokeOpacity={0.2}
                      radius={25}
                    />
                    <Text style={s.macroText}>Glucide</Text>
                  </View>
                </View>
              </View>
              <View style={s.recipeInfoContainer}>
                <Text style={s.recipeDescription}>
                  {currentRecipe.description}
                </Text>
                <View style={s.divider} />
                <Text style={s.sectionTitle}>Ingrédients :</Text>
                {currentRecipe.ingredients.map((ingredient, index) => (
                  <Text key={index} style={s.listItem}>
                    &bull; {ingredient}
                  </Text>
                ))}
                <View style={s.divider} />
                <Text style={s.sectionTitle}>Étapes à suivre :</Text>
                {currentRecipe.steps.map((step, index) => (
                  <Text key={index} style={s.listItem}>{`${
                    index + 1
                  }. ${step}`}</Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </Container>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    height: "100%",
    margin: 0
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  recipiesDrawer: {
    height: "60%",
    backgroundColor: "#FFFF",
    borderColor: "#FFFF",
    borderWidth: 5,
    borderRadius: 30,
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  recipeInfoContainer: {
    marginTop: 20,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recipeDescription: {
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
  },
  macroChartContainer: {},
  macroContainer: {
    paddingTop: 4,
    flexDirection: "row",
  },
  macroText: {
    marginLeft: 10,
    marginTop: 15,
  },
});
