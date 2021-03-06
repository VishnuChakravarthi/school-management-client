import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { fetchCourses } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Courses from "./Courses";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    fontFamily: "ROBOTO",
    fontSize: "20px",
    cursor: "pointer",
  },
  control: {
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  createBtn: {
    textAlign: "center",
    margin: 20,
  },
}));

const Faculty = (props) => {
  const classes = useStyles();

  // console.log(props);

  useEffect(() => {
    props.fetchCourses();
  }, []);

  if (!props.faculty.courses) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <h2 style={{ textAlign: "center", margin: "20px" }}>YOUR COURSES</h2>
      <Grid container>
        <Courses courses={props.faculty.courses} type={"faculty"} />
        <Grid item xs={12} className={classes.createBtn}>
          <Button variant="contained" color="primary">
            <Link className={classes.link} to="/faculty/createcourse">
              Create Course
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return state;
};

export default connect(mapStateToProps, { fetchCourses })(Faculty);
