import { useEffect, useState } from "react";

import phoneService from "./services/phonebook";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterNames, setFilterNames] = useState("");
  const [successMessage, setSuccessMessage] = useState({
    message: null,
    error: false,
  });

  useEffect(() => {
    phoneService.getAll().then((resp) => setPersons(resp));
  }, []);

  const handleAddName = (event) => {
    event.preventDefault();

    const alreadyExists = persons.some((person) => person.name === newName);

    if (alreadyExists) {
      const updatePhone = confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (!updatePhone) {
        return;
      }

      const oldPersonId = persons.find((p) => p.name === newName);

      const newPerson = {
        name: newName,
        number: newNumber,
      };

      phoneService
        .update(oldPersonId.id, newPerson)
        .then((resp) => {
          setPersons(persons.map((p) => (p.id !== resp.id ? p : resp)));
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setSuccessMessage({
            message: `Information of '${newPerson.name}' has already been removed from server`,
            error: true,
          });

          setTimeout(() => {
            setSuccessMessage({
              message: null,
              error: false,
            });
          }, 5000);
          setPersons(persons.filter((p) => p.id !== oldPersonId.id));
        });

      setSuccessMessage({
        message: `Number updated for ${newPerson.name}`,
        error: false,
      });

      setTimeout(() => {
        setSuccessMessage({
          message: null,
          error: false,
        });
      }, 5000);

      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    phoneService.create(newPerson).then((resp) => {
      setPersons(persons.concat(resp));
      setNewName("");
      setNewNumber("");
    });

    setSuccessMessage({ message: `Added ${newPerson.name}`, error: false });

    setTimeout(() => {
      setSuccessMessage({
        message: null,
        error: false,
      });
    }, 5000);
  };

  const removePhone = (person) => {
    const deletePhone = window.confirm(`Delete ${person.name}`);

    if (deletePhone) {
      phoneService.remove(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
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

      <Notification data={successMessage} />

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

      <Persons persons={namesToShow} removePhone={removePhone} />
    </div>
  );
};

export default App;
