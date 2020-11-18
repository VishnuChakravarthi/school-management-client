import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCourse, registerCourse } from "../../actions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    minWidth: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  courseTitle: {
    textAlign: "center",
    marginBottom: 20,
  },
  inner: {
    padding: "20px 50px",
  },
});

const CourseView = ({
  getCourse,
  registerCourse,
  regCourse,
  match,
  course,
  type,
}) => {
  const classes = useStyles();

  // console.log(course);
  useEffect(() => {
    getCourse(match.params.id);
  }, []);

  // console.log(regCourse);

  const isReg = regCourse?.find((course) => {
    return match.params.id === course.course._id;
  });

  // console.log(isReg);

  if (!course) {
    return <div>Loading !</div>;
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent className={classes.inner}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.courseTitle}
          >
            {course.name}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                ID
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                : {course.id}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                Department
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                : {course.department}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                Room
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                : {course.room}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                Team
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                : {course.team}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                Waitlist Capacity
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                : {course.waitlistcapacity}
              </Typography>
            </Grid>
          </Grid>
          {type === "student" ? (
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h6" component="h2">
                  Course Coordinator
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="h2">
                  : {course.creator.name}
                </Typography>
              </Grid>
            </Grid>
          ) : null}
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                Description
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="h2">
                : {course.description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="large" variant="contained">
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              Back
            </Link>
          </Button>
          {!isReg && type === "student" ? (
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => registerCourse(course._id)}
            >
              Register
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    course: state.faculty.course,
    regCourse: state.student.courses,
    type: state.user.status,
  };
};

export default connect(mapStateToProps, { getCourse, registerCourse })(
  CourseView
);
