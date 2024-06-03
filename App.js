//Autheur: Salim, Ardon, Theo
//Date: 14.05.2024
import { StyleSheet, View } from "react-native";
import { AppNavigator } from "./src/Navigations/AppNavigation";
import { RecoilRoot } from "recoil";
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from "react-native-recoil-persist";

export default function App() {
  return (
    <RecoilRoot>
      <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
        <AppNavigator testID="app-root" />
      </ReactNativeRecoilPersistGate>
    </RecoilRoot>
  );
}

const s = StyleSheet.create({
  container: {},
});
