import React from "react";
import { Link } from "react-router-dom";
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
    textTransform: "capitalize",

    title: {
      color: "red"
    }
  },
  media: {
    height: 0,
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

export default function PaperV2({ paper }) {
  const {
    name,
    subject,
    paperType,
    year,
    slug,
    numberOfDownloads,
    images
  } = paper;

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={name}
        subheader={
          <h5 style={{ color: "white" }}>Downloads : {numberOfDownloads}</h5>
        }
      />
      <CardMedia className={classes.media} image={images[0]} title={name} />
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          <h4>Year : {year}</h4>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/papers/${subject}/${paperType}/${year}/${slug}`}>
          <Button size="small" variant="contained">
            Download
          </Button>
        </Link>
      </CardActions>
    </Card>

    // <article className="paper">
    //   <div className="img-container">
    //     <img src={images[0]} alt={name} />
    //     <div className="downloads-top">
    //       <h6>{numberOfDownloads}</h6>
    //       <p>Downloads</p>
    //     </div>
    //     <Link
    //       className="dwn-link btn-primary"
    //       to={`/papers/${subject}/${paperType}/${year}/${slug}`}
    //     >
    //       Download Paper
    //     </Link>
    //   </div>
    //   <p>{name}</p>
    // </article>
  );
}
