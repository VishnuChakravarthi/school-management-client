import React from "react";
import CourseForm from "./CourseForm";
import { createCourse } from "../../actions";

import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    width: "90%",
    margin: "auto",
    padding: "20px",
  },
}));

const CourseCreate = ({ createCourse }) => {
  const classes = useStyles();
  const onSubmit = (formValues) => {
    createCourse();
  };

  return (
    <div className={classes.root}>
      <h2 style={{ textAlign: "center", margin: "20px" }}>CREATE COURSE</h2>
      <CourseForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createCourse })(CourseCreate);
