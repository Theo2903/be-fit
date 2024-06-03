//Autheur: Ardon, Théo, Salim
//Date: 27.05.2024
//Test of AppNavigator.js

import React from "react";
import { render } from "@testing-library/react-native";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "../src/navigations/AppNavigator";
import { selectedDietTypeState } from "../../recoil/RecoilState";

describe("AppNavigator", () => {
  const initialRecoilState = ({ set }) => {
    set(selectedDietTypeState, "GetStarted");
  };

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <RecoilRoot initializeState={initialRecoilState}>
        <AppNavigator />
      </RecoilRoot>
    );
    const navigationContainer = getByTestId("navigation-container");
    expect(navigationContainer).toBeTruthy();
  });

  it("initially renders the GetStarted screen", () => {
    const { getByTestId } = render(
      <RecoilRoot initializeState={initialRecoilState}>
        <AppNavigator />
      </RecoilRoot>
    );
    const getStartedScreen = getByTestId("get-started-screen");
    expect(getStartedScreen).toBeTruthy();
  });
});
