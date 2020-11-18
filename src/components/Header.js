import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../actions";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  accountIcon: {
    padding: 10,
    color: "white",
  },
}));

const Header = ({ isSignedIn, userLogout }) => {
  const classes = useStyles();

  const logout = () => {
    userLogout();
  };

  const renderButtons = () => {
    if (isSignedIn) {
      return (
        <div>
          <Link to={"/profile"} className={classes.accountIcon}>
            <AccountCircleIcon />
          </Link>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Typography>
          {renderButtons()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.user.isSignedIn,
  };
};

export default connect(mapStateToProps, { userLogout })(Header);
