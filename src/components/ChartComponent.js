import { useState } from "react";
import { ChartView } from "./ChartView";
import { BarChartType, LineChartType, PieChartType } from "./constants";
import { RadioTypeComponent } from "./RadioTypeComponent";

export const ChartComponent = ({ labels, values }) => {
  const [typeChart, setTypeChart] = useState(BarChartType);

  const TypeChartHandler = (event) => {
    setTypeChart(event.target.value);
  };
  return (
    <div>
      <ChartView labels={labels} values={values} type={typeChart} />
      <div className="control is-flex is-flex-direction-column m-5">
        <RadioTypeComponent
          type={BarChartType}
          isChecked={typeChart === BarChartType}
          onChange={TypeChartHandler}
        />
        <RadioTypeComponent
          type={LineChartType}
          isChecked={typeChart === LineChartType}
          onChange={TypeChartHandler}
        />
        <RadioTypeComponent
          type={PieChartType}
          isChecked={typeChart === PieChartType}
          onChange={TypeChartHandler}
        />
      </div>
    </div>
  );
};
