import React from "react";
import TodayWeather from "./components/TodayWeather";
import { makeStyles } from "@material-ui/core/styles";
import Weather from "./pictures/Weather.jpg";
import FutureWeather from "./components/FutureWeather";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles({
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

  return (
    <div className={classes.app}>
      <div className={classes.leftArea}>
        <img className={classes.imageRoot} src={Weather} alt={"weather"} />
        <Sidebar country={country} setCountry={setCountry} setCity={setCity} />
      </div>
      <div className={classes.rightArea}>
        <TodayWeather city={city} country={country} />
        <FutureWeather city={city} />
      </div>
    </div>
  );
}
