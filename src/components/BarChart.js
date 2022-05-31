import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

export const BarChart = ({ labels, values }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

  const chartAreaBorder = {
    id: "chartAreaBorder",
    beforeDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, top, width, height },
      } = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    },
  };

  const options = {
    responsive: true,
    barThickness: 40,
    borderColor: ["#34495E "],
    borderWidth: 2,
    layout: {
      padding: 20,
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        min: -1,
        max: Math.max(...values) + 1,
        ticks: { stepSize: 1 },
        display: false,
        grid: {
          display: false,
          beginAtZero: false,
          offset: true,
        },
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#D6EAF8"],
        borderColor: ["#34495E "],
        borderSkipped: false,
        borderWidth: 2,
      },
    ],
  };

  return <Bar data={data} options={options} plugins={[chartAreaBorder]} />;
};
