import ReactNativeRecoilPersist from "react-native-recoil-persist";
import { atom } from "recoil";

export const selectedDietTypeState = atom({
  key: "selectedDietTypeState",
  default: null,
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});
