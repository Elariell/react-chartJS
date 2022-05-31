import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const LineChart = ({ labels, values, type }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    // Title,
    Tooltip
  );

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: type,
        data: values,

        borderColor: ["#696969"],
        borderWidth: 3,
      },
    ],
  };

  return <Line data={data} options={options} />;
};
