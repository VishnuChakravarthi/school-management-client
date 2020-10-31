import React from "react";
import { connect } from "react-redux";

import { userRegister } from "../../actions";
import Form from "./Form";

const UserRegister = ({ userRegister }) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
    userRegister();
  };
  return <Form onSubmit={onSubmit} register={true} />;
};

export default connect(null, { userRegister })(UserRegister);
