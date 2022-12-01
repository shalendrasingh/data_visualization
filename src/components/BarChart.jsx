import React from "react";
import { data } from "./data";
import ReactEcharts from "echarts-for-react";

export const BarChart = () => {
  // created arrays of category name
  let xAxis = ["Alcohol: 1", "Alcohol: 2", "Alcohol: 3"];

  //storing the average value of each alchol category as array of string
  let malicAcid = [];

  // creating the arrays for each alchol category and storing the data.
  let alchol1 = [];
  let alchol2 = [];
  let alchol3 = [];

  // filtering the alchol categories pushes to indivisual array
  data.filter((f) =>
    f.Alcohol === 1
      ? alchol1.push(f)
      : f.Alcohol === 2
      ? alchol2.push(f)
      : f.Alcohol === 3
      ? alchol3.push(f)
      : null
  );

  // calculating the average of each alchol category
  let getAverage = (arr) => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer);
    return sum / arr.length;
  };
  let malicAcidCal1 = alchol1.map((person) => person["Malic Acid"]);
  let malicAcidCal12 = alchol2.map((person) => person["Malic Acid"]);
  let malicAcidCal13 = alchol3.map((person) => person["Malic Acid"]);

  // after calculating average of malicAcid pushes to malicAcid[] array that we created on top as a final data of malicAcid .
  malicAcid.push(
    getAverage(malicAcidCal1).toFixed(2),
    getAverage(malicAcidCal12).toFixed(2),
    getAverage(malicAcidCal13).toFixed(2)
  );

  // creating options object and setting the labled and data array to xAxis and yAxis
  // so when we pass this object in ReactEcharts as option the data should be plotted.

  const options = {
    grid: {
      top: 50,
      right: 100,
      bottom: 20,
      left: 40,
    },
    xAxis: [
      {
        name: "Alcohol",
        type: "category",
        data: xAxis,
      },
    ],
    yAxis: [
      {
        axisLabel: {
          textStyle: {
            fontSize: 12,
          },
        },
        name: "Malic Acid",
        type: "value",
      },
    ],
    series: [
      {
        name: "Average Malic Acid",
        data: malicAcid,
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <div style={{ minHeight: "100vh", marginTop: "110px" }}>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Bar Chart
      </h1>

      <ReactEcharts
        option={options}
        style={{
          border: "1px dashed #ccc",
          width: "60%",
          height: "350px",
          margin: "0 auto",
          padding: "20px",
        }}
      ></ReactEcharts>
    </div>
  );
};
