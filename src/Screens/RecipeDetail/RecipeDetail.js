// UI & Component
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Container } from "../../Components/Container/Container";
import { BackButton } from "../../Components/Button/BackButton";
import { ProgressChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#FFFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 255, ${opacity})`,
  barPercentage: 0.5,
};

const data = {
  labels: ["Calories"],
  data: [0.7],
};

export const RecipeDetail = () => {
  return (
    <View style={s.container}>
      <Container>
        <View style={s.headerContainer}>
          <BackButton />
          <Text style={s.headerText}>Recette #1</Text>
        </View>
        <View style={s.imageContainer}>
          <Image
            source={{
              uri: "https://i0.wp.com/www.programme-malin.com/wp-content/uploads/2020/09/P%C3%A2tes-%C3%A0-la-bolognaise.jpg?fit=1920%2C1080&ssl=1",
            }}
            style={s.image}
          />
        </View>
      </Container>
      <View style={s.recipiesDrawer}>
        <Container>
          <View style={s.chartContainer}>
            <ProgressChart
              data={data}
              width={100}
              height={90}
              strokeWidth={16}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={true}
            />
            <Text>205 cal</Text>
          </View>
        </Container>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  imageContainer: {
    height: "80%",
  },
  image: {
    width: "auto",
    height: "100%",
  },
  recipiesDrawer: {
    height: "60%",
    backgroundColor: "#FFFF",
    borderColor: "#FFFF",
    borderWidth: 5,
    borderRadius: 30,
  },
  chartContainer: {
    flexDirection: "row"
  },
});
