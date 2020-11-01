import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import { userUpdate } from "../../actions";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
}));

const EditProfile = ({ user, userUpdate }) => {
  const classes = useStyles();

  const onSubmit = (formValues) => {
    const data = formValues;
    delete data.courses;
    delete data._id;
    // console.log(data);
    userUpdate(data);
    // props.editStream(props.match.params.id, formValues);
  };

  return (
    <div className={classes.root}>
      <Form onSubmit={onSubmit} initialValues={user} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { userUpdate })(EditProfile);
