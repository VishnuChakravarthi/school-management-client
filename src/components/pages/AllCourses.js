import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllCourses } from "../../actions";
import { Link } from "react-router-dom";
import Courses from "./Courses";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "99%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    fontFamily: "ROBOTO",
    fontSize: "20px",
  },
}));

const AllCourses = ({ fetchAllCourses, courses }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchAllCourses();
  }, []);

  if (!courses) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <Courses courses={courses} />
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return { courses: state.courses.allCourses };
};

export default connect(mapStateToProps, {
  fetchAllCourses,
})(AllCourses);
