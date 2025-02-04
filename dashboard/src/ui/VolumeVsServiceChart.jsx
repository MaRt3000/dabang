import React from 'react';
import { Card } from '@mantine/core';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', volume: 200, services: 400 },
  { name: 'B', volume: 250, services: 500 },
  { name: 'C', volume: 180, services: 450 },
  { name: 'D', volume: 190, services: 380 },
  { name: 'E', volume: 170, services: 300 },
  { name: 'F', volume: 160, services: 320 }];

export default function VolumeVsServiceChart() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold text-[#05004E]">Volume vs Service Level</h2>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="volume" stackId="a" fill="#00E096" barSize={10} />
          <Bar dataKey="services" stackId="a" fill="#0095FF" barSize={10} />        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center items-center mt-4 text-sm text-gray-600">
        <div className="flex items-start mr-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 "></span>
         <p className='inline-block'> Volume <b className="ml-2 font-bold">1,135</b></p>
        </div>
        <div className="flex items-start">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 block "></span>
          <p className='inline-block'> Services <b className="ml-2 font-bold">635</b></p>

        </div>
      </div>
    </Card>
  );
}
