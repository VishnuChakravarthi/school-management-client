import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import UserHome from "./pages/UserHome";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Profile from "./pages/UserProfile";
import Home from "./pages/Home";
import Header from "./Header";
import history from "./History";
import EditProfile from "./pages/EditProfile";
import UserRegister from "./pages/UserRegister";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={UserRegister} />
            <Route path="/home" exact component={UserHome} />
            <Route path="/faculty/courses" exact component={Courses} />
            <Route path="/faculty/courses/:id" exact component={Course} />
            <Route path="/allcourses" exact component={Courses} />
            <Route path="/student/courses/:id" exact component={Course} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/edit" exact component={EditProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;