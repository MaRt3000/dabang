import React from "react";
import { BarChart } from "@mantine/charts";

function BarThree() {
  const data = [
    { month: "Jan", Smartphones: 1200, Laptops: 1400 },
    { month: "Feb", Smartphones: 1000, Laptops: 1300 },
    { month: "Mar", Smartphones: 800, Laptops: 1500 },
    { month: "Apr", Smartphones: 1100, Laptops: 1300 },
    { month: "May", Smartphones: 1300, Laptops: 1900 },
    { month: "June", Smartphones: 1300, Laptops: 1900 },
    { month: "July", Smartphones: 1300, Laptops: 1900 },
  ];
  return (
    <BarChart
      h={130}
      data={data}
      dataKey="month"
      series={[
        { name: "Smartphones", color: "green" },
        { name: "Laptops", color: "gold" },
      ]}
      tickLine="y"
      gridAxis="none"
      withYAxis={false}
    />
  );
}
export default BarThree;
