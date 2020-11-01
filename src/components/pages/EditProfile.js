import React from "react";
import { connect } from "react-redux";

import Form from "./Form";

import { userUpdate } from "../../actions";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

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
