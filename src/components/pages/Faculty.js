import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

import { fetchCourses } from "../../actions";
import { connect } from "react-redux";

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
  control: {
    padding: theme.spacing(2),
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
          <Grid item xs={12} key={course.courseId}>
            <Paper className={classes.paper}>{course.courseName}</Paper>
          </Grid>
        ))}
      </Grid>
      {/* <button onClick={() => }>Click me</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { fetchCourses })(Faculty);
