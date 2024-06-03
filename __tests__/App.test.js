//Autheur: Ardon, Théo, Salim
//Date: 27.05.2024
//Test of App.js

import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

describe("App Component", () => {
  it("should render the main application component without crashing", () => {
    const { getByTestId } = render(<App />);
    const appRoot = getByTestId("app-root");
    expect(appRoot).toBeTruthy();
  });

  it("should render at least one child component", () => {
    const { getByTestId } = render(<App />);
    const appRoot = getByTestId("app-root");
    expect(appRoot.children.length).toBeGreaterThan(0);
  });
});
