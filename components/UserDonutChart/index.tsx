"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CustomSelect from "../ui/select";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Students", "Mentors", "Programs", "Others"],
  datasets: [
    {
      label: "Users",
      data: [10, 30, 30, 50, 120],
      backgroundColor: ["#A78BFA", "#FFB44F", "#FCA5A5", "#9BDFC4", "#60A5FA"],
      borderWidth: 0,
      cutout: "75%",
    },
  ],
};

const total = chartData.datasets[0].data.reduce((acc, val) => acc + val, 0);

export const UserDonutChart = () => {
  return (
    <div className="bg-white  rounded-lg w-full">
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 p-4">
        <h2 className="text-lg font-semibold text-gray-800">Users</h2>
        <CustomSelect options={["All"]} />
      </div>
      <div className="flex items-center gap-10 justify-center p-4 min-[350px]:flex-row flex-col">
        <div className="flex items-center justify-center relative">
          <div className="sm:w-40 sm:h-40 w-24 h-24">
            <Doughnut
              data={chartData}
              options={{
                cutout: "75%",
                rotation: Math.PI, // Rotates 180 degrees to shift the Students to the left
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          </div>
          <div className="absolute text-center">
            <p className="text-xl font-bold text-black">{total}</p>
            <p className="text-gray-500 text-sm">Users</p>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-400" />
              Students
            </div>
            <span className="font-semibold">200</span>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-400" />
              Mentors
            </div>
            <span className="font-semibold">8</span>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-300" />
              Programs
            </div>
            <span className="font-semibold">22</span>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-300" />
              Others
            </div>
            <span className="font-semibold">10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
