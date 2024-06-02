//Autheur: Theo
//Date: 14.05.2024
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
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { EmptyScreen } from "../../Components/EmptyScreen/EmptyScreen";
import axios from "axios";

export const AlimentDetail = () => {
  const [alimentData, setAlimentData] = useState(null);
  const route = useRoute();
  const id = route.params?.productId;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
        .then((response) => {
          setAlimentData(response.data);
        });
    };
    fetchData();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const ingredientsString = alimentData?.product?.ingredients_text_fr;

  const ingredientsArray = ingredientsString && ingredientsString.split(", ");

  return alimentData != null ? (
    <View style={s.container}>
      <Container>
        <View style={s.headerContainer}>
          <BackButton />
        </View>
        {alimentData.product.image_url && (
          <View style={s.imageContainer}>
            <Image
              source={{
                uri: alimentData.product.image_url,
              }}
              style={s.image}
            />
          </View>
        )}
      </Container>
      <View
        style={[
          s.recipiesDrawer,
          alimentData.product.image_url ? { height: "50%" } : { height: "80%" },
        ]}
      >
        <Container>
          <ScrollView>
            <View>
              <View style={s.chartContainer}>
                <CircularProgress
                  value={alimentData.product.nutriments["energy-kcal"]}
                  radius={80}
                  progressValueColor={"black"}
                  maxValue={1000}
                  title={"CAL"}
                  titleColor={"black"}
                  titleStyle={{ fontWeight: "bold" }}
                />
                <View style={s.macroChartContainer}>
                  <View style={s.macroContainer}>
                    <CircularProgress
                      value={alimentData.product.nutriments["proteins"]}
                      valueSuffix={"g"}
                      radius={25}
                    />
                    <Text style={s.macroText}>Proteine</Text>
                  </View>
                  <View style={s.macroContainer}>
                    <CircularProgress
                      value={alimentData.product.nutriments["fat"]}
                      valueSuffix={"g"}
                      radius={25}
                    />
                    <Text style={s.macroText}>Lipide</Text>
                  </View>
                  <View style={s.macroContainer}>
                    <CircularProgress
                      value={alimentData.product.nutriments["carbohydrates"]}
                      valueSuffix={"g"}
                      radius={25}
                    />
                    <Text style={s.macroText}>Glucide</Text>
                  </View>
                </View>
              </View>
              <View style={s.recipeInfoContainer}>
                <Text style={s.recipeTitle}>
                  {alimentData.product.abbreviated_product_name_fr}
                </Text>
                <Text style={s.recipeDescription}>
                  {alimentData.product.generic_name_fr}
                </Text>
                <Text>
                  Nutriscore :{" "}
                  {alimentData.product.nutriscore_grade
                    ? alimentData.product.nutriscore_grade.toUpperCase()
                    : "Aucune information"}
                </Text>
                <Text>
                  Conservation :{" "}
                  {alimentData.product.conservation_conditions_fr
                    ? alimentData.product.conservation_conditions_fr
                    : "Aucune information"}
                </Text>
                {ingredientsArray.length >= 1 && (
                  <>
                    <View style={s.divider} />
                    <Text style={s.sectionTitle}>Ingrédients :</Text>
                    {ingredientsArray.map((ingredient, index) => (
                      <Text key={index} style={s.listItem}>
                        • {ingredient}
                      </Text>
                    ))}
                  </>
                )}
                <View style={s.divider} />
                <Text>{alimentData.product.customer_service_fr}</Text>
              </View>
            </View>
          </ScrollView>
        </Container>
      </View>
    </View>
  ) : (
    <>
      <EmptyScreen btnLabel="Retour" onPress={handleGoBack} />
    </>
  );
};

const s = StyleSheet.create({
  container: {
    height: "100%",
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
  imageContainer: {
    height: "100%",
  },
  image: {
    width: "100%",
    height: 350,
  },
  recipiesDrawer: {
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
    fontWeight: "600",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
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
