const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ title, quantity }) => {
  return (
    <p>
      {title} {quantity}
    </p>
  );
};

const Content = ({ data }) => {
  return (
    <>
      {data.map((exercise, index) => (
        <Part key={index} title={exercise.title} quantity={exercise.quantity} />
      ))}
    </>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        data={[
          { title: part1, quantity: exercises1 },
          { title: part2, quantity: exercises2 },
          { title: part3, quantity: exercises3 },
        ]}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
