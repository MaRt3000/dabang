import React from 'react';
import { Card, Table, Progress } from '@mantine/core';

const data = [
  { id: '01', name: 'Home Decor Range', popularity: 45, color: 'blue' },
  { id: '02', name: 'Disney Princess Pink Bag 18’', popularity: 29, color: 'green' },
  { id: '03', name: 'Bathroom Essentials', popularity: 18, color: 'violet' },
  { id: '04', name: 'Apple Smartwatches', popularity: 25, color: 'orange' }
];

export default function TopProducts() {
  return (
    <Card shadow="sm" radius="md" className="px-4 bg-white rounded-xl  shadow-md">
      <h2 className="text-xl font-semibold text-[#05004E]">Top Products</h2>
      <Table className="mt-4 w-full">
        <thead>
          <tr className="text-left font-normal font-sans text-[#96A5B8] text-[13px]">
            <th>#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b  border-gray-200 text-sm">
              <td className="text-gray-600 py-2 font-medium">{item.id}</td>
              <td className="text-gray-900 font-medium">{item.name}</td>
              <td className="w-1/3">
                <Progress value={item.popularity} color={item.color} radius="xl" className="h-2" />
              </td>
              <td>
                <span
                  style={{
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: '0.375rem',
                    backgroundColor: `var(--mantine-color-${item.color}-0)`,
                    color: `var(--mantine-color-${item.color}-7)`,
                    border: `1px solid var(--mantine-color-${item.color}-2)`
                  }}
                >
                  {item.popularity}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
