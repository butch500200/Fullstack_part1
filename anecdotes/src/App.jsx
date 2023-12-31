import { useState } from "react";

const Votes = ({ votes }) => {
  if (votes === undefined || votes === 0) {
    return (
      <>
        <h3>Has no votes</h3>
      </>
    );
  }
  return (
    <>
      <h3>Has {votes} votes</h3>
    </>
  );
};

const MostVoted = ({ anecdotes, points }) => {
  if (points.length === 0) {
    return <></>;
  }
  let maxIndex = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] > points[maxIndex]) {
      maxIndex = i;
    }
  }

  return (
    <>
      <h3>{anecdotes[maxIndex]}</h3>
      <Votes votes={points[maxIndex]}></Votes>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [points, setPoints] = useState([]);

  const [selected, setSelected] = useState(0);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleVotes = (index) => {
    //console.log(index, points[index]);
    if (points[index] === undefined) {
      const copy = [...points];
      copy[index] = 1;
      setPoints(copy);
    } else {
      let currentVotes = points[index];
      const copy = [...points];
      copy[index] = currentVotes + 1;
      setPoints(copy);
    }
  };

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <Votes votes={points[selected]}></Votes>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>
        Next
      </button>
      <button onClick={() => handleVotes(selected)}>Vote</button>
      <MostVoted anecdotes={anecdotes} points={points}></MostVoted>
    </div>
  );
};

export default App;
