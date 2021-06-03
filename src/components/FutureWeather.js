import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { futureData, dateArray } from "../fakeData.js";

const useStyles = makeStyles(() =>
  createStyles({
    chartContainer: {
      margin: "auto",
      paddingTop: "5%",
      width: "90%",
      height: "50%",
    },
  })
);

export default function FutureWeather(props) {
  const classes = useStyles();
  const selectedCity = futureData.find(
    (value) => value.cityName === props.city
  );

  const selectedCityHigh = selectedCity.futureWeather.high;
  const selectedCitylow = selectedCity.futureWeather.low;

  const futureCityData = dateArray.map((value, index) => ({
    date: value,
    high: selectedCityHigh[index].replace("℃", ""),
    low: selectedCitylow[index].replace("℃", ""),
  }));

  return (
    <div className={classes.chartContainer}>
      <ResponsiveContainer>
        <LineChart data={futureCityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="high" stroke="#8884d8" />
          <Line type="monotone" dataKey="low" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
