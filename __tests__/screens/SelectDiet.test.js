//Autheur: Ardon, Théo, Salim
//Date: 27.05.2024
//Test of SelectDiet.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { RecoilRoot } from "recoil";
import { SelectDiet } from "../SelectDiet";
import { act } from 'react-test-renderer';

// Mock diet type data
jest.mock("../../../data/DietType.json", () => [
  {
    id: 1,
    label: "Perte de poids",
    key: "weight_loss",
    image:
      "https://c.pxhere.com/photos/e4/8e/action_adult_athlete_city_competition_crowd_endurance_event-1548041.jpg!d",
  },
  {
    id: 2,
    label: "Prise de poids",
    key: "weight_gain",
    image:
      "https://c.pxhere.com/photos/af/d1/bodybuilder_weight_training_stress_muscular_athlete_gym_man-755456.jpg!d",
  },
  {
    id: 3,
    label: "Maintien de poids",
    key: "weight_maintenance",
    image:
      "https://c.pxhere.com/photos/e7/ec/activity_adult_athlete_barbell_boy_brawny_crossfit_equipments-1556539.jpg!d",
  },
]);

describe("SelectDiet Component", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText } = render(
      <RecoilRoot>
        <SelectDiet />
      </RecoilRoot>
    );

    const headerText = getByText("Quel est votre objectif  🍽️");
    const continueButton = getByText("Continuer");

    expect(headerText).toBeTruthy();
    expect(continueButton).toBeTruthy();
  });

  it("navigates to Dashboard screen on button press", () => {
    const { getByText } = render(
      <RecoilRoot>
        <SelectDiet />
      </RecoilRoot>
    );

    const continueButton = getByText("Continuer");
    fireEvent.press(continueButton);

    expect(continueButton).toHaveBeenCalled();
  });

  it("updates selected diet type on chip press", async () => {
    const { getByText } = render(
      <RecoilRoot>
        <SelectDiet />
      </RecoilRoot>
    );

    const diet1Chip = getByText("Perte de poids");
    fireEvent.press(diet1Chip);

    // Assertion to check if recoil state is update
    await act(async () => {
      const selectedDietTypeState = await getRecoilState(selectedDietTypeState);
      expect(selectedDietTypeState).toEqual("weight_loss");
    });
  });
});
