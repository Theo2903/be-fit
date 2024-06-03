//Autheur: Ardon, Théo, Salim
//Date: 27.05.2024
//Test of GetStarted.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { GetStarted } from "../GetStarted";

describe("GetStarted Component", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText } = render(<GetStarted />);
    const getStartedScreen = getByTestId("get-started-screen");
    const welcomeText = getByText("Bienvenue sur BeFit ! 🎉");
    const startButton = getByText("Commencer !");

    expect(getStartedScreen).toBeTruthy();
    expect(welcomeText).toBeTruthy();
    expect(startButton).toBeTruthy();
  });

  it("navigates to SelectDiet screen on button press", () => {
    const { getByText } = render(<GetStarted />);
    const startButton = getByText("Commencer !");

    fireEvent.press(startButton);

    expect(startButton).toHaveBeenCalled();
  });
});
