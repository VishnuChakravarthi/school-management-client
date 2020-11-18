import React from "react";
import { connect } from "react-redux";

import { userRegister } from "../../actions";
import Form from "./Form";

const UserRegister = ({ userRegister }) => {
  const onSubmit = (formValues) => {
    // console.log(formValues);
    userRegister();
  };
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>USER REGISTRATION</h2>
      <Form onSubmit={onSubmit} register={true} />
    </div>
  );
};

export default connect(null, { userRegister })(UserRegister);
