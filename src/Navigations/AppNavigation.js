//Autheur: Salim, Ardon, Theo
//Date: 14.05.2024
//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { GetStarted } from "../Screens/GetStarted/GetStarted";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "../Screens/Dashboard/Dashboard";
import { RecipeDetail } from "../Screens/RecipeDetail/RecipeDetail";
import { AlimentDetail } from "../Screens/AlimentDetail/AlimentDetail";
import { SelectDiet } from "../Screens/SelectDiet/SelectDiet";
import { useRecoilState } from "recoil";
import { selectedDietTypeState } from "../../recoil/RecoilState";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const [dietTypeState, setDietTypeState] = useRecoilState(
    selectedDietTypeState
  );

  return (
    <NavigationContainer testID="navigation-container">
      <Stack.Navigator initialRouteName={dietTypeState === "GetStarted"}>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectDiet"
          component={SelectDiet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavigationContainer"
          component={NavigationContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlimentDetail"
          component={AlimentDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
