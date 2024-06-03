//Autheur: Ardon, Théo, Salim
//Date: 27.05.2024
//Test of Dashboard.js
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { RecoilRoot } from "recoil";
import { Dashboard } from "../Dashboard";

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

// Mock recipies data
jest.mock("../../../data/Recipies.json", () => [
  {
    id: 1,
    diet_type: 1,
    title: "Poulet grillé avec légumes rôtis",
    description:
      "Un plat sain et délicieux avec du poulet grillé tendre et des légumes colorés rôtis au four.",
    image_url:
      "https://img.freepik.com/photos-gratuite/poitrines-poulet-grillees-legumes_23-2148189875.jpg?t=st=1717345689~exp=1717349289~hmac=d81d0357eb1f9141499e4e784b688057a06fa14c7ca17694bcabd47a7823af3d&w=1380",
    ingredients: [
      "4 filets de poulet",
      "2 courgettes, coupées en rondelles",
      "2 poivrons rouges, coupés en lanières",
      "1 oignon rouge, coupé en quartiers",
      "2 cuillères à soupe d'huile d'olive",
      "1 cuillère à soupe de jus de citron",
      "1 cuillère à café de paprika",
      "Sel et poivre, au goût",
      "Persil frais, pour garnir",
    ],
    steps: [
      "Préchauffez votre four à 200°C.",
      "Dans un grand bol, mélangez les courgettes, les poivrons rouges et les quartiers d'oignon avec l'huile d'olive, le jus de citron, le paprika, le sel et le poivre.",
      "Étalez les légumes sur une plaque de cuisson et faites-les rôtir au four pendant environ 20-25 minutes, ou jusqu'à ce qu'ils soient tendres et légèrement dorés.",
      "Pendant ce temps, assaisonnez les filets de poulet avec du sel et du poivre, puis faites-les griller sur un gril chaud pendant environ 6-8 minutes de chaque côté, ou jusqu'à ce qu'ils soient bien cuits.",
      "Servez le poulet grillé avec les légumes rôtis, garni de persil frais.",
    ],
    calories: 350,
    proteins: 30,
    lipids: 12,
    carbohydrate: 25,
  },
]);

// Mock Camera permissions
jest.mock("expo-camera", () => ({
  Camera: {
    requestCameraPermissionsAsync: jest.fn(() => ({
      status: "granted",
    })),
  },
}));

describe("Dashboard Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    );

    const headerText = getByText("Vous avez un plat savoureux en tête ?");
    expect(headerText).toBeTruthy();
  });
});
