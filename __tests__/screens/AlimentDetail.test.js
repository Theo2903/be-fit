//Autheur: Ardon, Théo, Salim
//Date: 27.05.2024
//Test of AlimentDetail.js

import React from "react";
import { render } from "@testing-library/react-native";
import { AlimentDetail } from "../../src/Screens/AlimentDetail/AlimentDetail";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(() => ({
    params: { productId: 1 }, // mock product id
  })),
}));

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        product: {
          image_url:
            "https://img.freepik.com/photos-gratuite/poitrines-poulet-grillees-legumes_23-2148189875.jpg?t=st=1717345689~exp=1717349289~hmac=d81d0357eb1f9141499e4e784b688057a06fa14c7ca17694bcabd47a7823af3d&w=1380",
          nutriments: {
            "energy-kcal": 200,
            proteins: 20,
            fat: 10,
            carbohydrates: 30,
          },
          abbreviated_product_name_fr: "Test Product",
          generic_name_fr: "Test description",
          nutriscore_grade: "A",
          conservation_conditions_fr: "Conservation condition",
          ingredients_text_fr: "Ingredient 1, Ingredient 2",
          customer_service_fr: "Customer service information",
        },
      },
    })
  ),
}));

describe("AlimentDetail Component", () => {
  it("renders correctly", async () => {
    const { getByText, findByText } = render(<AlimentDetail />);

    expect(getByText("Loading...")).toBeTruthy();

    const titleElement = await findByText("Test Product");
    const descriptionElement = getByText("Test description");
    const nutriscoreElement = getByText("Nutriscore : A");
    const conservationElement = getByText(
      "Conservation : Conservation condition"
    );
    const ingredient1Element = getByText("• Ingredient 1");
    const ingredient2Element = getByText("• Ingredient 2");
    const customerServiceElement = getByText("Customer service information");

    // chcek if all expected elements are rendered
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    expect(nutriscoreElement).toBeTruthy();
    expect(conservationElement).toBeTruthy();
    expect(ingredient1Element).toBeTruthy();
    expect(ingredient2Element).toBeTruthy();
    expect(customerServiceElement).toBeTruthy();
  });
});
