import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRegCourses } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Courses from "./Courses";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "99%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  course: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Student = ({ fetchRegCourses, courses }) => {
  const classes = useStyles();

  // console.log(courses);

  //

  // console.log(allcourses);

  useEffect(() => {
    fetchRegCourses();
  }, []);

  // var regCourses = [];
  // if (courses.length === 0) {
  //   regCourses = courses.map((course) => {
  //     return course.course;
  //   });
  // }

  if (!courses) {
    return <div> Loading....</div>;
  }
  if (courses.length === 0) {
    return <div>You haven't registered to any course</div>;
  }

  const regCourses = courses.map((course) => {
    return course.course;
  });

  const renderPage = () => {
    return (
      <div className={classes.root}>
        <Courses courses={regCourses} />
      </div>
    );
  };
  return (
    <div className={classes.course}>
      {renderPage()}
      <Button size="large" variant="contained" color="primary">
        <Link
          to="/allcourses"
          style={{ textDecoration: "none", color: "white", width: "100%" }}
        >
          Register a Course
        </Link>
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { courses: state.courses.regCourses };
};

export default connect(mapStateToProps, { fetchRegCourses })(Student);
