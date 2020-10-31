import React from "react";
import { connect } from "react-redux";

import Form from "./Form";

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

const EditProfile = ({ user }) => {
  const classes = useStyles();
  const valueset = [
    "city",
    "country",
    "company",
    "school",
    "hometown",
    "languages",
    "gender",
  ];

  const onSubmit = (formValues) => {
    console.log(formValues);
    // props.editStream(props.match.params.id, formValues);
  };

  return (
    <div className={classes.root}>
      {/* <form className={classes.form} onSubmit={submitEditForm} noValidate autoComplete="off">
        <Grid container className={classes.fields} spacing={3}>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="standard-required"
              label="NAME"
              defaultValue={user.name}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="standard-required"
              label="EMAIL"
              defaultValue={user.email}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              disabled
              id="standard-required"
              label="USERTYPE"
              defaultValue={user.userType}
              style={{ width: "100%" }}
            />
          </Grid>

          {valueset.map((key) => {
            return (
              <Grid key={key} item xs={6} sm={6}>
                <TextField
                  id="standard-required"
                  label={key.toUpperCase()}
                  defaultValue={user[key]}
                  style={{ width: "100%" }}
                />
              </Grid>
            );
          })}
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-multiline-static"
              label="ABOUT ME"
              multiline
              rows={4}
              defaultValue={user.aboutme}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Button variant="contained">Cancel</Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form> */}

      <Form onSubmit={onSubmit} user={user} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(EditProfile);
