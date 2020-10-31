import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getCourse } from "../../actions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    minWidth: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CourseView = ({ getCourse, match, course }) => {
  const classes = useStyles();

  console.log(course);
  useEffect(() => {
    getCourse(match.params.id);
  }, []);

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {course.name}
          </Typography>
          <Typography variant="body2" component="p">
            ID : {course.id}
          </Typography>
          <Typography variant="body2" component="p">
            Department : {course.department}
          </Typography>
          <Typography variant="body2" component="p">
            Room : {course.room}
          </Typography>
          <Typography variant="body2" component="p">
            Team : {course.team}
          </Typography>
          <Typography variant="body2" component="p">
            Waitlist Capacity : {course.waitlistcapacity}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { course: state.faculty.course };
};

export default connect(mapStateToProps, { getCourse })(CourseView);
