import React from "react";
import { Field, reduxForm } from "redux-form";

import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { status: props.user.userType };
  // }

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div>
          <div style={{ color: "red" }}>{error}</div>
        </div>
      );
    }
    return null;
  };

  // { label, value, input, meta }

  renderInput = ({ label, input, meta }) => {
    return (
      <div>
        <TextField
          label={label}
          {...input}
          autoComplete="off"
          style={{ width: "100%" }}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  handleChange = (event) => {
    // this.setState({ status: event.target.value });
  };

  renderSelect = ({}) => {
    return (
      <div>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={this.state.status}
          onChange={this.handleChange}
          style={{ width: "100%" }}
        >
          <MenuItem value="staff">Staff</MenuItem>
          <MenuItem value="student">Student</MenuItem>
        </Select>
      </div>
    );
  };

  valueset = [
    "city",
    "country",
    "company",
    "school",
    "hometown",
    "languages",
    "gender",
  ];

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        >
          <Grid container spacing={3} style={{ width: "80%", margin: "auto" }}>
            <Grid item xs={6} sm={6}>
              <Field name="name" label="NAME*" component={this.renderInput} />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Field name="email" label="EMAIL*" component={this.renderInput} />
            </Grid>
            {this.props.register ? (
              <React.Fragment>
                <Grid item xs={6} sm={6}>
                  <Field
                    name="password"
                    label="PASSWORD*"
                    component={this.renderInput}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Field
                    name="confirmPassword"
                    label="CONFIRM PASSWORD*"
                    component={this.renderInput}
                  />
                </Grid>
              </React.Fragment>
            ) : null}
            <Grid item xs={6} sm={6}>
              <Field name="type" label="TYPE*" component={this.renderInput} />
            </Grid>
            {this.valueset.map((key) => {
              return (
                <Grid key={key} item xs={6} sm={6}>
                  <Field
                    name={key}
                    label={key.toUpperCase()}
                    component={this.renderInput}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid container spacing={3} style={{ width: "80%", margin: "auto" }}>
            <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
              <Button variant="contained">Cancel</Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                onClick={this.props.handleSubmit(this.props.onSubmit)}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  console.log("error", formValues);
  if (!formValues.name) {
    error.name = "Please enter a name";
  }

  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmail = regex.test(formValues.email);

  if (!formValues.email || !isEmail) {
    error.email = "Please enter a valid email";
  }

  if (!formValues.password || formValues.password.length < 7) {
    error.password = "Please enter a password of length 7 or more";
  }

  if (!formValues.confirmPassword) {
    error.confirmPassword = "Please enter a same value as previous password";
  }

  if (formValues.password !== formValues.confirmPassword) {
    error.confirmPassword = "Password do not match";
  }

  if (!formValues.type) {
    error.type = "Please enter either Staff or Student";
  }
  return error;
};

export default reduxForm({
  form: "genForm",
  validate: validate,
})(Form);
