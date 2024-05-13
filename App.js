import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppNavigator } from "./src/Navigations/AppNavigation";

export default function App() {
  return <AppNavigator />;
}

const s = StyleSheet.create({
  container: {},
});