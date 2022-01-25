import React from 'react';
import pattern from 'patternomaly'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export function Chart(props: any) {
const { labels, positionalData } = props

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: '',
      data: positionalData,
      backgroundColor: [
        pattern.draw('square', '#ff6384'),
        pattern.draw('ring', '#36a2eb'),
        pattern.draw('diamond', '#cc65fe'),
        pattern.draw('triangle', '#ffce56'),
        pattern.draw('dot', 'green')
    ]
,
    }
  ],
};

  
  return <Bar options={options} data={data} />;
}
