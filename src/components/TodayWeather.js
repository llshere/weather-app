import { createStyles, makeStyles } from "@material-ui/core/styles";
import { GridList } from "@material-ui/core";
import { GridListTile } from "@material-ui/core/";
import { GridListTileBar } from "@material-ui/core";
import { todayData, timezone } from "../fakeData.js";
import { useEffect, useRef } from "react";
import React from "react";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    gridList: {
      flexWrap: "nowrap",
      margin: "0",
    },
    gridListTile: { margin: "0" },
    title: {
      color: theme.palette.primary.light,
    },
    subtitle: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(210, 243, 244,1)0%, rgba(0,0,0,0) 100%)",
    },
    image: {
      top: 0,
      height: "75%",
      width: "auto",
      left: "50%",
      position: "relative",
      transform: "translateX(-50%)",
    },
    cityTitle: {
      padding: "0.5em",
    },
    cityTime: {
      padding: "0.5em",
    },
  })
);

export default function TodayWeather(props) {
  const classes = useStyles();
  const { city, country } = props;

  const tz = timezone.find((value) => value.country === country).timezone;

  const selectedCity = todayData.find((value) => value.cityName === city);
  const selectedCityList = selectedCity.todayWeather;

  const currentTime = moment().tz(tz).format("H HH:mm");

  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start",
    });
  }, [timeRef, city]);

  return (
    <div>
      <div className={classes.cityTitle}>{city}</div>
      <Moment interval={1000} tz={tz} className={classes.cityTime}></Moment>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={5}>
          {selectedCityList.map((value) => (
            <GridListTile
              className={classes.GridListTile}
              key={value.time}
              {...(value.time.slice(0, 2) === currentTime.slice(0, 2)
                ? { ref: timeRef }
                : {})}
            >
              <img className={classes.image} src={value.img} alt={"img"} />
              <GridListTileBar
                title={value.time}
                subtitle={value.temperature}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                  subtitle: classes.subtitle,
                }}
              ></GridListTileBar>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
