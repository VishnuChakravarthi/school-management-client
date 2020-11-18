import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "98%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    fontFamily: "ROBOTO",
    fontSize: "20px",
  },
  registered: {
    float: "right",
    position: "absolute",
    right: 12,
    width: 60,
    marginTop: -5,
    height: 50,
    textAlign: "right",
    background: "linear-gradient(to bottom left, #48bb22 50%, #ffffff 50%)",
  },
  icon: {
    padding: 5,
    color: "white",
  },
}));

const Courses = ({ regCourses, courses, type }) => {
  const classes = useStyles();

  // // console.log(courses);

  if (!courses) {
    return <div>Loading...</div>;
  }

  // console.log(courses);
  // console.log(regCourses);

  const regTrue = [];

  courses.map((course, i) => {
    regTrue[i] = false;
    regCourses?.map((reg) => {
      if (course._id === reg.course._id) {
        regTrue[i] = true;
        return;
      }
    });
  });

  const renderTable = (course) => {
    // // console.log(course);
    return (
      <>
        <Grid item xs={12} sm={3}>
          Name : {course.name}
        </Grid>
        <Grid item xs={12} sm={3}>
          Id: {course.id}
        </Grid>
        <Grid item xs={12} sm={3}>
          Department : {course.department}
        </Grid>
        <Grid item xs={12} sm={3}>
          Team: {course.team}
        </Grid>
        <Grid item xs={12} sm={3}>
          Room: {course.room}
        </Grid>
        <Grid item xs={12} sm={3}>
          waitlist Capacity : {course.waitlistcapacity}
        </Grid>
        <Grid item xs={12} sm={12}>
          Description: {course.description}
        </Grid>
      </>
    );
  };

  // console.log(regTrue);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {courses.map((course, i) => (
          // console.log(reg),
          <Grid item xs={12} key={course.id}>
            <Paper className={classes.paper}>
              <Link
                to={`/courses/${course._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Grid container spacing={3}>
                  {type === "student" ? null : regTrue[i] ? (
                    <div className={classes.registered}>
                      <DoneIcon className={classes.icon} />
                    </div>
                  ) : null}
                  {renderTable(course)}
                </Grid>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    regCourses: state.courses.regCourses,
  };
};

export default connect(mapStateToProps)(Courses);
