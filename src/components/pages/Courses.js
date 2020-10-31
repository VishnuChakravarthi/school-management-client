import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllCourses } from "../../actions";

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
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
}));

const Courses = ({ fetchAllCourses, courses }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchAllCourses();
  }, []);

  if (!courses) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} key={course._id}>
            <Paper className={classes.paper}>{course.courseName}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { courses: state.user.allCourses };
};

export default connect(mapStateToProps, {
  fetchAllCourses,
})(Courses);
