import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainNavigator from "./components/MainNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainNavigator />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
