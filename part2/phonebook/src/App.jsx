import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterNames, setFilterNames] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((resp) => setPersons(resp.data));
  }, []);

  const handleAddName = (event) => {
    event.preventDefault();

    const alreadyExists = persons.some((person) => person.name === newName);

    if (alreadyExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      })
    );
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilter = (event) => {
    setFilterNames(event.target.value);
  };

  const namesToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterNames.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filterNames} handleFilter={handleFilter} />

      <h3>Add a new</h3>

      <PersonForm
        handleSubmit={handleAddName}
        name={newName}
        number={newNumber}
        handleName={handleNewName}
        handleNumber={handleNewNumber}
      />

      <h3>Numbers</h3>

      <Persons persons={namesToShow} />
    </div>
  );
};

export default App;
