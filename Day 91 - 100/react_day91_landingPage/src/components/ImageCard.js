import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  desc: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
  }
});

export default function ImageCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/11180711/pexels-photo-11180711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
     The Northern Lights
        </Typography>
        <Typography 
        variant="body2" 
        component='p'
        color="text.secondary"
        className={classes.desc}>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eveniet?
      </Typography>
      </CardContent>
    </Card>

    
  );
}
