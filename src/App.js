import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainNavigator from "./components/MainNavigator";

export default function App() {
  return (
    <BrowserRouter>
      <MainNavigator />
    </BrowserRouter>
  );
}
