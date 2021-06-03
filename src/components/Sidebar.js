import React from "react";
import { InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { countryList } from "../fakeData.js";

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
});

export default function Sidebar(props) {
  const classes = useStyles();

  const { country, setCountry, setCity } = props;
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
  );
}
