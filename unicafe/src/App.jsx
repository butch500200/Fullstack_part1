import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}:{value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let total = good + bad + neutral;
  let avg = (good - bad) / total;
  let postitivePer = (good / total) * 100 + "%";

  if (total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="total" value={total}></StatisticLine>
      <StatisticLine text="average" value={avg}></StatisticLine>
      <StatisticLine text="positive" value={postitivePer}></StatisticLine>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Please give your feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good"></Button>
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text="neutral"
      ></Button>
      <Button handleClick={() => setBad(bad + 1)} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
