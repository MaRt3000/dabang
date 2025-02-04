import React from "react";
import { BarChart } from "@mantine/charts";

function BarOne() {
  const data = [
    { month: "Monday", Laptops: 14, Tablets: 12 },
    { month: "Tuesday", Laptops: 17, Tablets: 11 },
    { month: "Wednesday", Laptops: 7, Tablets: 23 },
    { month: "Thursday", Laptops: 16, Tablets: 8 },
    { month: "Friday", Laptops: 13, Tablets: 12 },
    { month: "Saturday", Laptops: 17, Tablets: 14 },
    { month: "sunday", Laptops: 22, Tablets: 11 },
  ];

  return (
    <BarChart
      h={200}
      data={data}
      dataKey="month"
      series={[
        { name: "Laptops", color: "blue.6" },
        { name: "Tablets", color: "teal.4" },
      ]}
      tickLine="x"
      barWidth={5}
      barSpacing={5}
    />
  );
}
export default BarOne;
