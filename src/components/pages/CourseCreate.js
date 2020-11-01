import React from "react";
import CourseForm from "./CourseForm";
import { createCourse } from "../../actions";

import { connect } from "react-redux";

const CourseCreate = ({ createCourse }) => {
  const onSubmit = (formValues) => {
    createCourse();
  };

  return (
    <div>
      <CourseForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createCourse })(CourseCreate);
