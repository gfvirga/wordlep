import React from 'react'

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

export default function Chart(props: any) {
  const { labels, dataset } = props

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: dataset,
        backgroundColor: ['#6aaa64','#b59f3b','#86888a','#538d4e','#b59f3b'],
      }
    ],
  };
  
  return (
    <Bar options={options} data={data} />
    )
}
