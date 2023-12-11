import React from "react";
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <>
      <h1>class:{props.course.name}</h1>
      <p>Number of exercises: {props.course.exercises}</p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.classes.map((course) => (
        <Part key={course.name} course={course}></Part>
      ))}
    </>
  );
};

const Total = (props) => {
  var total = 0;
  props.classes.forEach((course) => {
    total += course.exercises;
  });
  return (
    <>
      <h3>Total creadits:{total}</h3>
    </>
  );
};

const App = () => {
  // const-definitions
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const classes = [part1, part2, part3];
  return (
    <div>
      <Header course={course} />
      <Content classes={classes} />
      <Total classes={classes} />
    </div>
  );
};

export default App;
