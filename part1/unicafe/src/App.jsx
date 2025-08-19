import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ data }) => {
  if (data.total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={data.good} />
        <StatisticsLine text="neutral" value={data.neutral} />
        <StatisticsLine text="bad" value={data.bad} />
        <StatisticsLine text="all" value={data.total} />
        <StatisticsLine
          text="average"
          value={(data.good - data.bad) / data.total || 0}
        />
        <StatisticsLine
          text="positive"
          value={`${(data.good * 100) / data.total || 0} %`}
        />
      </tbody>
    </table>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNetral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNetral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h2>statistics</h2>
      <Statistics data={{ good, bad, neutral, total }} />
    </div>
  );
}

export default App;
