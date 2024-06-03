//Autheur: Ardon, Théo, Salim
//Date: 27.05.2024
//Test of AlimentList.js
import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import { AlimentList } from "../AlimentList";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

jest.mock("../../src/Screens/AlimentList/AlimentListQuerys", () => ({
  getAliments: jest.fn(),
}));

describe("AlimentList Component", () => {
  it("renders loading screen while fetching data", async () => {
    const { getByText } = render(<AlimentList searchValue="test" />);
    expect(getByText("Loading...")).toBeTruthy();
  });

  it("renders empty screen if search value length is less than 3", async () => {
    const { getByText } = render(<AlimentList searchValue="ab" />);
    expect(getByText("Empty Screen")).toBeTruthy();
  });

  it("renders list of items when data is fetched", async () => {
    const mockData = [
      { id: 1, product_name: "Product 1" },
      { id: 2, product_name: "Product 2" },
    ];
    require("../../src/Screens/AlimentList/AlimentListQuerys").getAliments.mockImplementationOnce(
      (setIsLoading, setOffData, searchValue) => {
        setIsLoading(false);
        setOffData(mockData);
      }
    );
    const { getByText } = render(<AlimentList searchValue="test" />);
    await waitFor(() => expect(getByText("Product 1")).toBeTruthy());
    expect(getByText("Product 2")).toBeTruthy();
  });
});
