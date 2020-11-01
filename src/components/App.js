import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import UserHome from "./pages/UserHome";
import AllCourses from "./pages/AllCourses";
import CourseView from "./pages/CourseView";
import Profile from "./pages/UserProfile";
import Home from "./pages/Home";
import Header from "./Header";
import history from "./History";
import EditProfile from "./pages/EditProfile";
import UserRegister from "./pages/UserRegister";
import CourseCreate from "./pages/CourseCreate";

const App = () => {
  return (
    <div
      style={{
        background: "Beige",
        marginTop: 90,
        padding: 25,
        fontFamily: "ROBOTO",
      }}
    >
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={UserRegister} />
            <Route path="/home" exact component={UserHome} />
            <Route path="/faculty/courses" exact component={AllCourses} />
            <Route
              path="/faculty/createcourse"
              exact
              component={CourseCreate}
            />
            <Route path="/faculty/courses/:id" exact component={CourseView} />
            <Route path="/allcourses" exact component={AllCourses} />
            <Route path="/student/courses/:id" exact component={CourseView} />
            <Route path="/courses/:id" exact component={CourseView} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/edit" exact component={EditProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
