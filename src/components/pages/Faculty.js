import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { fetchCourses } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "99%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    fontFamily: "ROBOTO",
    fontSize: "20px",
  },
  control: {
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const Faculty = (props) => {
  const classes = useStyles();

  console.log(props);

  useEffect(() => {
    props.fetchCourses();
  }, []);

  if (!props.faculty.courses) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.faculty.courses.map((course) => (
          <Grid item xs={12} key={course.id}>
            <Paper className={classes.paper}>
              {/* <Link to={`/faculty/courses/${course._id}`}>{course.name}</Link> */}
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  Name : {course.name}
                </Grid>
                <Grid item xs={3}>
                  Id: {course.id}
                </Grid>
                <Grid item xs={3}>
                  Department : {course.department}
                </Grid>
                <Grid item xs={3}>
                  Team: {course.team}
                </Grid>
                <Grid item xs={3}>
                  Room: {course.room}
                </Grid>
                <Grid item xs={3}>
                  waitlist Capacity : {course.waitlistcapacity}
                </Grid>
                <Grid item xs={3}>
                  Description: {course.description}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
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
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { fetchCourses })(Faculty);
