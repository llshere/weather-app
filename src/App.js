import React from "react";

import TodayWeather from "./TodayWeather";
import { InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import weather from "./pictures/weather.jpg";
import { cityList } from "./cityData.js";

const useStyles = makeStyles({
  selectBox: {
    width: "100%",
    marginBottom: "20%",
  },
  selectArea: {
    marginTop: "20%",
    width: "75%",
    display: "block",
    margin: "auto",
  },
  leftArea: {
    height: "100vh",
    width: "25%",
    backgroundColor: "lightblue",
  },
  rightArea: {
    height: "100vh",
    width: "75%",
    backgroundColor: "lightgreen",
  },
  app: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },
  image: {
    height: "20%",
    width: "75%",
    display: "block",
    margin: "auto",
  },
});

export default function App() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("China");
  const [city, setCity] = React.useState("Beijing");

  const handleChangeCountry = (event) => {
    setCity("");
    setCountry(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const selectedCountry =
    cityList.find((value) => value.countryName === country) || {};
  const selectedCountrylist = selectedCountry.cityName;

  return (
    <div className={classes.app}>
      <div className={classes.leftArea}>
        <img className={classes.image} src={weather} alt={"weather"} />
        <div className={classes.selectArea}>
          <InputLabel>country</InputLabel>
          <Select
            className={classes.selectBox}
            value={country}
            onChange={handleChangeCountry}
          >
            {cityList.map((value, index) => (
              <MenuItem value={value.countryName} key={index}>
                {value.countryName}
              </MenuItem>
            ))}
          </Select>
          <InputLabel>city</InputLabel>
          <Select
            className={classes.selectBox}
            value={city}
            onChange={handleChangeCity}
          >
            {selectedCountrylist.map((value, index) => (
              <MenuItem value={value} key={index}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className={classes.rightArea}>
        <TodayWeather city={city} />
      </div>
    </div>
  );
}
