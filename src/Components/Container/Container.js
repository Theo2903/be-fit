//Autheur: Ardon 
//Date: 14.05.2024
// Stylesheet
import { StyleSheet } from "react-native";
// UI & Component
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export const Container = ({ children, style }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[s.container, style]}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
