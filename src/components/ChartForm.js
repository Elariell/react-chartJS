import { useState } from "react";
import { ChartComponent } from "./ChartComponent";
import { InputComponent } from "./InputComponent";

const InitialData = {
  x: ["January", "February", "March", "April", "May"],
  y: [1, 5, 10, 1, 2],
};

export const ChartForm = () => {
  const [labels, setLabels] = useState(InitialData.x);
  const [values, setValues] = useState(InitialData.y);

  const XValuesHandler = (value) => {
    const XValues = checkLastSymbol(value.trim()).split(",");
    setLabels(XValues);
  };
  const YValuesHandler = (value) => {
    const YValues = checkLastSymbol(value.trim()).split(",");
    setValues(YValues);
  };

  const checkLastSymbol = (string) => {
    if (string.slice(-1) === ",") {
      return string.slice(0, -1);
    } else return string;
  };

  return (
    <div className="container chart-form">
      <InputComponent
        initialValue={InitialData.x.toString()}
        callback={XValuesHandler}
      />
      <InputComponent
        initialValue={InitialData.y.toString()}
        callback={YValuesHandler}
      />
      <ChartComponent labels={labels} values={values} />
    </div>
  );
};
