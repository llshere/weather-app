import { createStyles, makeStyles } from "@material-ui/core/styles";
import { GridList } from "@material-ui/core";
import { GridListTile } from "@material-ui/core/";
import { GridListTileBar } from "@material-ui/core";
import { tileData } from "./tileData.js";
import { useState, useEffect, useRef } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "nowrap",
    },
    gridListTile: {},
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    image: {
      display: "block",
      margin: "auto",
      width: "50%",
      height: "50%",
    },
  })
);

export default function TodayWeather(props) {
  const classes = useStyles();
  const { city } = props;
  const [date, setDate] = useState(new Date());

  const currentTime = "10:00";
  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start",
    });
  }, [timeRef]);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => setDate(new Date());

  return (
    <div>
      <div>{city}</div>
      <h3>{date.toLocaleTimeString()}</h3>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={5}>
          {tileData.map((value) => (
            <GridListTile
              className={classes.GridListTile}
              key={value.time}
              {...(value.time === currentTime ? { ref: timeRef } : {})}
            >
              <img className={classes.image} src={value.img} alt={value.img} />
              <GridListTileBar
                title={value.time}
                subtitle={value.temperature}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              ></GridListTileBar>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
