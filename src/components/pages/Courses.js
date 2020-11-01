import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "99%",
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
    right: 20,
    width: 60,
    marginTop: -5,
    height: 50,
    textAlign: "right",
    background: "linear-gradient(to bottom left, #09f752 50%, #ffffff 50%)",
  },
  icon: {
    padding: 5,
    color: "white",
  },
}));

const Courses = ({ courses, type }) => {
  const classes = useStyles();

  console.log(courses);

  if (!courses) {
    return <div>Loading...</div>;
  }

  // const reg = courses.map((course) => {
  //   return regCourse.map((reg) => {
  //     if(course._id === reg._id){
  //       return true;
  //     }

  //   })
  // });

  // console.log(reg);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {courses.map((course) => (
          // console.log(reg),
          <Grid item xs={12} key={course.id}>
            <Paper className={classes.paper}>
              {!type ? (
                <Link
                  to={`/courses/${course._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Grid container spacing={3}>
                    {/* {reg[0][index] ? (
                        <div className={classes.registered}>
                          <DoneOutlineIcon className={classes.icon} />
                        </div>
                      ) : null} */}

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
                    <Grid item xs={12} sm={3}>
                      Description: {course.description}
                    </Grid>
                  </Grid>
                </Link>
              ) : (
                <Grid container spacing={3} style={{ color: "black" }}>
                  {/* {reg[0][index] ? (
                    <div className={classes.registered}>
                      <DoneOutlineIcon className={classes.icon} />
                    </div>
                  ) : null} */}

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
                  <Grid item xs={12} sm={3}>
                    Description: {course.description}
                  </Grid>
                </Grid>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { courses: ownProps.courses, type: ownProps.type };
};

export default connect(mapStateToProps)(Courses);
