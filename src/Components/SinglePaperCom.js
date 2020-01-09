import React from "react";
import { withPaperConsumer } from "../Context/PaperContext";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto"
  },
  image: {
    width: 300,
    height: 300
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export function SinglePaperCom({ context, match }) {
  const { loading, papers } = context;
  const { subject, type, slug, year } = match.params;
  const classes = useStyles();

  let paper;

  if (slug) {
    paper = papers.filter(paper => paper.slug === slug);
    console.log(paper);
  }

  return (
    <>
      <div>
        {paper.map(paper => {
          return (
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src={paper.images[0]}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {paper.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {paper.paperType}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {paper.subject}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          style={{ cursor: "pointer" }}
                        >
                          Download
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1"></Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default withPaperConsumer(SinglePaperCom);
