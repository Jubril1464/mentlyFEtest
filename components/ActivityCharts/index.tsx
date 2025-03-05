"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Button } from "../ui/button/button";
import CustomSelect from "../ui/select";

ChartJS.register(ArcElement, Tooltip, Legend);

const ActivityChart: React.FC = () => {
  const data = {
    labels: ["Daily payment", "Hobby", "Other"],
    datasets: [
      {
        data: [55, 20, 25],
        backgroundColor: ["#8B5CF6", "#22D3EE", "#374151"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%", 
    rotation: -90, 
    circumference: 180,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        backgroundColor: "#4F46E5",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        cornerRadius: 8,
      },
    },
  };

  return (
    <div className="bg-primary-1 p-6 rounded-xl shadow-md w-full lg:col-span-2 col-span-1">
      <div className="flex justify-between">
        <h2 className="text-white text-2xl font-semibold ">Activity</h2>
        <CustomSelect options={["2019", "2020", "2021"]} />
      </div>
      <div className="relative flex justify-center mt-5 w-[240px] h-[200px] mx-auto">
        <Doughnut data={data} options={options} />
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
          75%
        </div>
      </div>
      <div className="flex justify-between gap-6 text-white text-sm w-[240px] mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#6359E9] rounded-full"></span>
            <span>Daily payment</span>
          </div>
          <span>55%</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#64CFF6] rounded-full"></span>
            <span>Hobby</span>
          </div>
          <span>20%</span>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button variant="outline" as="button" className="w-[280px]" size="md">
          See All Activity
        </Button>
      </div>
    </div>
  );
};

export default ActivityChart;
