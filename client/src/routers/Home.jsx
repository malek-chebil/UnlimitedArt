import React from "react";
import ReactDOM from "react-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Icon, Grid } from "@material-ui/core";
import { grey, blue } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url("/images/wallhaven-k9ke37.jpg")',
    width: "100vw",
    height: `${(1080 / 1920) * 100}vw`,
    maxHeight: "calc(100vh - 65px)",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  title: {
    textAlign: "center",
    fontFamily: "Sansita Swashed",
    fontSize: "64px",
    fontWeight: "bolder",
    color: grey[50],
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: "48px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "32px",
    },
  },
}));

const SeeMore = withStyles((theme) => ({
  root: {
    borderRadius: "25px",
    margin: "20px",
    padding: "10px 20px",
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
    fontWeight: "bolder",
  },
}))((props) => (
  <Button
    {...props}
    variant="contained"
    color="secondary"
    endIcon={<Icon>visibility</Icon>}
  />
));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        style={{ height: "100%" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <div className={classes.title}>
            <div>unlimited art</div>
            <div>First .. Platform</div>
          </div>
        </Grid>
        <Grid item>
          <SeeMore>Learn More</SeeMore>
        </Grid>
      </Grid>
    </div>
  );
}
