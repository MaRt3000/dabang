import React from 'react';
import { LineChart } from '@mantine/charts';

const data = [
  { date: 'Jan', loyal: 320, new: 280, unique: 340 },
  { date: 'Feb', loyal: 300, new: 260, unique: 330 },
  { date: 'Mar', loyal: 280, new: 240, unique: 310 },
  { date: 'Apr', loyal: 260, new: 220, unique: 290 },
  { date: 'May', loyal: 250, new: 300, unique: 270 },
  { date: 'Jun', loyal: 300, new: 380, unique: 320 },
  { date: 'Jul', loyal: 330, new: 400, unique: 310 },
  { date: 'Aug', loyal: 320, new: 360, unique: 300 },
  { date: 'Sep', loyal: 310, new: 340, unique: 280 },
  { date: 'Oct', loyal: 290, new: 320, unique: 260 },
  { date: 'Nov', loyal: 270, new: 300, unique: 240 },
  { date: 'Dec', loyal: 260, new: 280, unique: 220 }
];

 function BarChart() {
  return (
    
    <LineChart
    h={200}
    data={data}
    dataKey="date"
    series={[
      { name: 'loyal', color: 'purple' },
      { name: 'new', color: 'red' },
      { name: 'unique', color: 'green' },
    ]}
    curveType="natural"
    withDots={false}
  />
      
  );
}
export default BarChart;