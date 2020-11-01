import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllCourses } from "../../actions";
import Courses from "./Courses";

import { makeStyles } from "@material-ui/core/styles";

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
