import React from "react";
import { data } from "./data";
import ReactEcharts from "echarts-for-react";

export const ScatterChart = () => {
  // creating two arrays data1 and data2 to store the Hue and Color intensity data from original data objects.
  let data1 = [];
  let data2 = [];

  // looping through the data and storing in data1 and data2
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    data1.push(element.Hue);
    let tr = element["Color intensity"];
    data2.push(tr);
  }

  // creating options object and setting the Hue and Color intensity array to xAxis and yAxis
  // so when we pass this object in ReactEcharts as option the data should be plotted.

  const options = {
    grid: {
      top: 40,
      right: 100,
      bottom: 20,
      left: 40,
    },
    xAxis: [
      {
        name: "Color intensity",
        type: "category",
        data: data2,
      },
    ],
    yAxis: [
      {
        name: "Hue",
        type: "value",
      },
    ],
    series: [
      {
        name: "Hue",
        data: data1,
        type: "scatter",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <div>
      <h2>ScatterChart</h2>
      <ReactEcharts
        option={options}
        style={{
          border: "1px dashed #ccc",
          width: "90%",
          height: "450px",
          margin: "0 auto",
          padding: "20px",
        }}
      ></ReactEcharts>
    </div>
  );
};
