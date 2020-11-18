import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllCourses } from "../../actions";
import Courses from "./Courses";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    fontFamily: "ROBOTO",
    fontSize: "20px",
  },
  backBtn: {
    display: "flex",
    margin: "20px auto",
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
      <h2 style={{ textAlign: "center", margin: "20px" }}>ALL COURSES</h2>
      <Courses courses={courses} />
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
        <Button size="large" variant="contained" className={classes.backBtn}>
          Back
        </Button>
      </Link>
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
