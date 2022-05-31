import { BarChartType, LineChartType, PieChartType } from "./constants";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";

export const ChartView = ({ labels, values, type }) => {
  if (type === BarChartType) {
    return <BarChart labels={labels} values={values} />;
  } else if (type === LineChartType) {
    return <LineChart labels={labels} values={values} />;
  } else if (type === PieChartType) {
    return <PieChart labels={labels} values={values} />;
  }
};
