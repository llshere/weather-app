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
import { futureData, dateArray } from "./fakeData";

const useStyles = makeStyles(() =>
  createStyles({
    lineChart: {
      width: "80%",
      height: "80%",
      marginTop: "10%",
      marginLeft: "10%",
      marginRight: "10%",
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
    <ResponsiveContainer width="80%" height="50%" margin="auto">
      <LineChart className={classes.lineChart} data={futureCityData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="high" stroke="#8884d8" />
        <Line type="monotone" dataKey="low" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
