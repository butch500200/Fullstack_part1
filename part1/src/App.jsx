import React from "react";
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <>
      {Object.entries(props.classes).map(([key, value]) => (
        <>
          <h key={key}>class:{key}</h>
          <p>Number of exercises: {value}</p>
        </>
      ))}
    </>
  );
};

const Total = (props) => {
  var total = 0;
  Object.entries(props.classes).forEach(([key, value]) => {
    total += value;
  });
  return (
    <>
      <p>Total creadits:{total}</p>
    </>
  );
};

const App = () => {
  // const-definitions
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const classes = {
    part1: exercises1,
    part2: exercises2,
    part3: exercises3,
  };
  return (
    <div>
      <Header course={course} />
      <Content classes={classes} />
      <Total classes={classes} />
    </div>
  );
};

export default App;
