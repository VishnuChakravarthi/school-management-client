import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin, userLogout } from "../../actions";
import LoginForm from "./LoginForm";

const Home = ({ userLogin, userLogout }) => {
  useEffect(() => {
    userLogout();
  }, []);

  const onSubmit = ({ email, password }) => {
    userLogin(email, password);
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
      New User?<Link to="/register">Register Here</Link>
    </div>
  );
};

export default connect(null, { userLogin, userLogout })(Home);
