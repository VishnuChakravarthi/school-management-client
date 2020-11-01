import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin, userLogout } from "../../actions";
import LoginForm from "./LoginForm";
import history from "../History";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: "auto",
  },
});

const Home = ({ userLogin, isSignedIn }) => {
  const classes = useStyles();

  const onSubmit = ({ email, password }) => {
    userLogin(email, password);
  };

  useEffect(() => {
    if (isSignedIn) {
      history.push("/home");
    }
  });

  if (isSignedIn) {
    return <div>You are signed in already</div>;
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <LoginForm onSubmit={onSubmit} />
        </CardContent>
        <CardActions style={{ justifyContent: "center", fontFamily: "ROBOTO" }}>
          New User?<Link to="/register">Register Here</Link>
        </CardActions>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn };
};

export default connect(mapStateToProps, { userLogin, userLogout })(Home);
