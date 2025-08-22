import Part from "./Part";

const Content = ({ data }) => {
  return (
    <>
      {data.map((exercise) => (
        <Part
          key={exercise.id}
          title={exercise.name}
          quantity={exercise.exercises}
        />
      ))}
    </>
  );
};

export default Content;
