const Person = ({ name, number, removePhone }) => {
  return (
    <p>
      {name} {number}
      <button onClick={removePhone}>delete</button>
    </p>
  );
};

export default Person;
