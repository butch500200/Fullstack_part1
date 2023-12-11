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
      <h1>class:{props.class.Name}</h1>
      <p>Number of exercises: {props.class.exercises}</p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {Object.entries(props.classes).map(([className, exercisesCount]) => (
        <>
          <Part
            class={{ Name: className, exercises: exercisesCount }}
            key={className}
          ></Part>
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
    [part1]: exercises1,
    [part2]: exercises2,
    [part3]: exercises3,
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
