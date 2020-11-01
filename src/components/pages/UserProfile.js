import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfile } from "../../actions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  card: {
    // maxWidth: 345,
    width: "80%",
  },
  media: {
    height: 200,
    width: "20%",
    background: "red",
    alignItems: "center",
  },
  table: {
    minWidth: 650,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fields: {
    padding: "10px",
    color: "black",
    fontSize: "20px",
  },
}));

const UserProfile = ({ fetchProfile, user }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchProfile();
  }, []);

  const valueset1 = ["name", "type", "email", "city", "country"];
  const valueset2 = ["company", "school", "hometown", "languages", "gender"];

  if (!user) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <Paper className={classes.paper}>
                  {valueset1.map((key) => {
                    return (
                      <Grid
                        container
                        className={classes.fields}
                        key={key}
                        spacing={3}
                      >
                        <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
                          {key.toUpperCase()} :
                        </Grid>
                        <Grid item xs={6} sm={6} style={{ textAlign: "left" }}>
                          {user[key]}
                        </Grid>
                      </Grid>
                    );
                  })}
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Paper className={classes.paper}>
                  {valueset2.map((key) => {
                    return (
                      <Grid
                        container
                        className={classes.fields}
                        key={key}
                        spacing={3}
                      >
                        <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
                          {key.toUpperCase()} :
                        </Grid>
                        <Grid item xs={6} sm={6} style={{ textAlign: "left" }}>
                          {user[key]}
                        </Grid>
                      </Grid>
                    );
                  })}
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="large" variant="contained">
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              Back
            </Link>
          </Button>
          <Button size="large" variant="contained" color="primary">
            <Link
              to="/profile/edit"
              style={{ textDecoration: "none", color: "white" }}
            >
              Edit
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapPropsToState, { fetchProfile })(UserProfile);
