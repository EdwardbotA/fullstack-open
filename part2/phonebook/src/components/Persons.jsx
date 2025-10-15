import Person from "./Person";

const Persons = ({ persons, removePhone }) => {
  return (
    <>
      {persons.length > 0 ? (
        persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            removePhone={() => removePhone(person)}
          />
        ))
      ) : (
        <p>Name not found</p>
      )}
    </>
  );
};

export default Persons;
