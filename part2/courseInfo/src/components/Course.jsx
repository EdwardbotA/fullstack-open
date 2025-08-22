import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content data={course.parts} />
      <Total exercises={course.parts.map((exercise) => exercise.exercises)} />
    </div>
  );
};

export default Course;
