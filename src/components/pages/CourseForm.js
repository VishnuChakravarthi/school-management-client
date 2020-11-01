import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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

  valueset = ["id", "name", "department", "room", "team", "waitlistcapacity"];

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        >
          <Grid container spacing={3} style={{ width: "80%", margin: "auto" }}>
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
            <Grid item xs={12} sm={12}>
              <TextField
                label="DESCRIPTION"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ width: "80%", margin: "auto" }}>
            <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
              <Button variant="contained">
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Cancel
                </Link>
              </Button>
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
  if (!formValues.id) {
    error.id = "Please enter an Id";
  }

  if (!formValues.name) {
    error.name = "Please enter a name";
  }

  if (!formValues.department) {
    error.department = "Please enter a department";
  }

  if (!formValues.room) {
    error.room = "Please enter a room value";
  }

  if (!formValues.team) {
    error.team = "Please enter a team";
  }

  if (!formValues.waitlistcapacity) {
    error.waitlistcapacity = "Please enter either Staff or Student";
  }
  return error;
};

export default reduxForm({
  form: "courseForm",
  validate: validate,
})(Form);
