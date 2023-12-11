import React from "react";
const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <>
      <h1>class:{props.part.name}</h1>
      <p>Number of exercises: {props.part.exercises}</p>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      {props.classes.map((part) => (
        <Part key={part.name} part={part}></Part>
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
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content classes={course.parts} />
      <Total classes={course.parts} />
    </div>
  );
};

export default App;
