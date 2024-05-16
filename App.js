import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppNavigator } from "./src/Navigations/AppNavigation";
import { RecoilRoot } from "recoil";
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from "react-native-recoil-persist";

export default function App() {
  return (
    <RecoilRoot>
      <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
        <AppNavigator />
      </ReactNativeRecoilPersistGate>
    </RecoilRoot>
  );
}

const s = StyleSheet.create({
  container: {},
});
