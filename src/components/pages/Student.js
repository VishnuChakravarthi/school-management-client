import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRegCourses } from "../../actions";
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
  },
}));

const Student = ({ fetchRegCourses, courses }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchRegCourses();
  }, []);

  const renderPage = () => {
    if (!courses) {
      return <div>You haven't registered to any course</div>;
    }
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item xs={12} key={course._id}>
              <Paper className={classes.paper}>
                {course.course.courseName}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  return (
    <div>
      {renderPage()}
      <Link to="/allcourses">Register a Course</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { courses: state.student.courses };
};

export default connect(mapStateToProps, { fetchRegCourses })(Student);
