import React from "react";
import { Field, reduxForm } from "redux-form";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginForm extends React.Component {
  lower = (value) => value && value.toLowerCase();

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ label, input, meta }) => {
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
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

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        >
          <Grid container spacing={3} style={{ width: "80%", margin: "auto" }}>
            <Grid item xs={12} sm={12}>
              <Field
                name="email"
                label="EMAIL"
                component={this.renderInput}
                normalize={this.lower}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Field
                name="password"
                type="password"
                label="PASSWORD"
                component={this.renderInput}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ width: "80%", margin: "auto" }}>
            <Grid item xs={12} sm={12}>
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

  if (!formValues.name) {
    error.title = "Please enter a name";
  }

  if (!formValues.email) {
    error.description = "Please enter a email";
  }

  return error;
};

export default reduxForm({
  form: "loginform",
  validate,
})(LoginForm);
