import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Avatar, IconButton, CardMedia } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: "#2A2727",
    color: "white",

    title: {
      color: "red"
    }
  },
  media: {
    height: 300,
    paddingTop: "56.25%" // 16:9
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    color: "white"
  },
  subheader: {
    fontSize: 14,
    color: "white"
  },
  pos: {
    marginBottom: 12,
    color: "white"
  }
});

export default function GameCard({ game }) {
  const {
    title,
    isCracked,
    imageUrl,
    protections,
    isAAA,
    groups,
    crackDate,
    releaseDate,
    daysToCrack
  } = game;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        subheader={
          <h5 style={{ color: `${isCracked ? "green" : "red"}` }}>
            Crack Status : {isCracked ? "Cracked" : "Not Cracked"}
          </h5>
        }
      />
      <CardMedia className={classes.media} image={imageUrl} title={title} />
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          <h3>Studio : {isAAA ? "AAA" : "Indie"}</h3>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <h4>Protections : {protections}</h4>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <h4>Groups : {groups}</h4>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <h4>
            Release:{new Date(Date.parse(releaseDate)).toDateString()} Cracked:
            {crackDate}
          </h4>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Download
        </Button>
      </CardActions>
    </Card>
  );
}
