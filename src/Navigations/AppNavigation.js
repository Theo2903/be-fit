// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { GetStarted } from "../Screens/GetStarted/GetStarted";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "../Screens/Dashboard/Dashboard";
import { RecipeDetail } from "../Screens/RecipeDetail/RecipeDetail";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
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
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
