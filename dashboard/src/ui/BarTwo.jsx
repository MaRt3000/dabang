import React from "react";
import { AreaChart } from "@mantine/charts";

function BarTwo() {
  const data = [
    {
      date: "Mar 22",
      Oranges: 1138,
      Tomatoes: 2152,
    },
    {
      date: "Mar 23",
      Oranges: 1503,
      Tomatoes: 1902,
    },
    {
      date: "Mar 24",
      Oranges: 486,
      Tomatoes: 2061,
    },
    {
      date: "Mar 25",
      Oranges: 497,
      Tomatoes: 1709,
    },
    {
      date: "Mar 26",
      Oranges: 726,
      Tomatoes: 2190,
    },
    {
      date: "Mar 27",
      Oranges: 796,
      Tomatoes: 1503,
    },
    {
      date: "Mar 28",
      Oranges: 1503,
      Tomatoes: 2200,
    },
  ];
  return (
    <AreaChart
      h={150}
      data={data}
      dataKey="date"
      series={[
        { name: "Oranges", color: "blue.6" },
        { name: "Tomatoes", color: "teal.6" },
      ]}
      curveType="monotone"
      withXAxis={false}
      withYAxis={false}
      gridAxis="none"
    />
  );
}
export default BarTwo;
