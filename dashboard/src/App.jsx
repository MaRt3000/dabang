import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/charts/styles.css";
import Sidebar from "./components/Navbar";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import Card from "./components/Card";
import BarCard from "./components/BarCard";
import ProBar from "./components/ProBar";
const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="max-w-[1440px]">
        <Sidebar />
        <Header />
        <Card />
        <BarCard />
        <ProBar />
      </div>
    </MantineProvider>
  );
}

export default App;
