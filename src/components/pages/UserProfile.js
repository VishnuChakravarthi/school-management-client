import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfile } from "../../actions";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "90%",
    margin: "auto",
    background: "white",
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
      <h2 style={{ textAlign: "center", margin: "20px" }}>USER PROFILE</h2>
      <Grid container>
        <Grid item xs={6} sm={6}>
          {valueset1.map((key) => {
            return (
              <Grid container className={classes.fields} key={key} spacing={3}>
                <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
                  {key.toUpperCase()} :
                </Grid>
                <Grid item xs={6} sm={6} style={{ textAlign: "left" }}>
                  {user[key]}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={6}>
          {valueset2.map((key) => {
            return (
              <Grid container className={classes.fields} key={key} spacing={3}>
                <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
                  {key.toUpperCase()} :
                </Grid>
                <Grid item xs={6} sm={6} style={{ textAlign: "left" }}>
                  {user[key]}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <div>
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <Button style={{ margin: 20 }} size="large" variant="contained">
            Back
          </Button>
        </Link>

        <Link
          to="/profile/edit"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button size="large" variant="contained" color="primary">
            Edit
          </Button>
        </Link>
      </div>
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapPropsToState, { fetchProfile })(UserProfile);
