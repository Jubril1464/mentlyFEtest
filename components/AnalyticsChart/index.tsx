"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import CustomSelect from "../ui/select";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AnalyticsChart: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Income",
        data: [30000, 35000, 22000, 33000, 41000, 25000, 20000, 27000],
        backgroundColor: "#8B5CF6",
        borderRadius: 8,
        barThickness: 10,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
      {
        label: "Outcome",
        data: [20000, 30000, 25000, 22000, 28000, 30000, 26000, 29000],
        backgroundColor: "#22D3EE",
        borderRadius: 8,
        barThickness: 10,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#464687",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        titleFont: { size: 14, weight: 700, family: "Karla, sans-serif" },
        bodyFont: { size: 12, family: "Karla, sans-serif" },
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          title: (tooltipItems: any) => {
            return `${tooltipItems[0].label} 2020`;
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (tooltipItem: any) => {
            return `$${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#8C89B4",
          font: { family: "Karla, sans-serif" },
        },
        grid: {
          display: false,
        },
        stacked: false,
      },
      y: {
        ticks: {
          color: "#8C89B4",
          font: { family: "Karla, sans-serif" },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: (value: any) => `${value / 1000}K`,
          stepSize: 10000,
          max: 50000,
        },
        grid: {
          color: "#374151",
          borderDash: [5, 5],
        },
      },
    },
  };

  return (
    <div className="bg-primary-1 p-5 rounded-2xl shadow-md w-full sm:col-span-2 col-span-full">
      <div className="flex justify-between mb-2">
        <h2 className="text-white text-2xl font-semibold ">Analytics</h2>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 items-center">
            <div className="size-4 rounded-full bg-[#6359E9]"></div>
            <span>Income</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="size-4 rounded-full bg-[#64CFF6]"></span>
            <span>Outcome</span>
          </div>

          <CustomSelect options={["2019", "2020", "2021"]} />
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AnalyticsChart;
