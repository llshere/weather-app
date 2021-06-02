import React from "react";

import TodayWeather from "./TodayWeather";
import { InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Weather from "./pictures/Weather.jpg";
import { countryList } from "./fakeData.js";
import FutureWeather from "./FutureWeather";

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
    backgroundColor: "rgba(0,0,0,0)",
  },
  app: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },
  imageRoot: {
    height: "20%",
    width: "75%",
    display: "block",
    paddingTop: "10%",
    margin: "auto",
    objectFit: "cover",
  },
});

export default function App() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("China");
  const [city, setCity] = React.useState("Beijing");
  const [displayText, setDisplayText] = React.useState("Beijing");

  const handleChangeCountry = (event) => {
    setDisplayText("");
    setCountry(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
    setDisplayText(event.target.value);
  };

  const selectedCountry = countryList.find(
    (value) => value.countryName === country
  );
  const selectedCityList = selectedCountry.cityList;

  return (
    <div className={classes.app}>
      <div className={classes.leftArea}>
        <img className={classes.imageRoot} src={Weather} alt={"weather"} />
        <div className={classes.selectArea}>
          <InputLabel>country</InputLabel>
          <Select
            className={classes.selectBox}
            value={country}
            onChange={handleChangeCountry}
          >
            {countryList.map((value, index) => (
              <MenuItem value={value.countryName} key={index}>
                {value.countryName}
              </MenuItem>
            ))}
          </Select>
          <InputLabel>city</InputLabel>
          <Select
            className={classes.selectBox}
            value={displayText}
            onChange={handleChangeCity}
          >
            {selectedCityList.map((value, index) => (
              <MenuItem value={value} key={index}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className={classes.rightArea}>
        <TodayWeather city={city} country={country} />
        <FutureWeather city={city} />
      </div>
    </div>
  );
}
