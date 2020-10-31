import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin, userLogout } from "../../actions";
import LoginForm from "./LoginForm";
import history from "../History";

const Home = ({ userLogin, isSignedIn }) => {
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
      <LoginForm onSubmit={onSubmit} />
      New User?<Link to="/register">Register Here</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn };
};

export default connect(mapStateToProps, { userLogin, userLogout })(Home);
