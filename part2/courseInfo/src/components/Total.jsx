const Total = ({ exercises }) => {
  const result = exercises.reduce((acc, q) => acc + q, 0);

  return <strong>Total of {result} exercises</strong>;
};

export default Total;
