import React from "react";
import { connect } from "react-redux";
import Faculty from "./Faculty";
import Student from "./Student";
import ErrorPage from "./ErrorPage";

const UserHome = ({ status }) => {
  const renderUserPage = () => {
    if (status === "staff") {
      return <Faculty />;
    } else if (status === "student") {
      return <Student />;
    }
    return <ErrorPage />;
  };

  return <div>{renderUserPage()}</div>;
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    status: state.user.status,
  };
};

export default connect(mapStateToProps)(UserHome);
