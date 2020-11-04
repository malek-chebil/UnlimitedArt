import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundImage: url("dist/images/wallhaven-k9ke37.jpg"),
    width: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
  },
});

export default function Home() {
  const classes = useStyles();
  return <div className={classes.root} />;
}
