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
        <Part key={index} title={exercise.name} quantity={exercise.exercises} />
      ))}
    </>
  );
};

const Total = ({ exercises }) => {
  const result = exercises.reduce((acc, q) => acc + q, 0);

  return <p>Number of exercises {result}</p>;
};

const App = () => {
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
      <Header course={course.name} />
      <Content data={course.parts} />
      <Total exercises={course.parts.map((exercise) => exercise.exercises)} />
    </div>
  );
};

export default App;
