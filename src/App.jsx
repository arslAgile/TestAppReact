import { useState } from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Table from "./components/Table";
export default function App() {
  const [displayTable, setDisplayTable] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [person, setPerson] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [people, setPeople] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const deletePerson = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "person") {
      setPerson(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "gender") {
      setGender(value);
    }
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    const newEntry = { person, age, gender };
    if (editIndex !== null) {
      const updatedData = [...people];
      updatedData[editIndex] = newEntry;
      setPeople(updatedData);
      setEditIndex(null);
    } else {
      setPeople([...people, newEntry]);
    }
    setShowTable(true);
    setDisplayTable(false);
    setPerson("");
    setAge("");
    setGender("");
  };

  const handleEditPerson = (index) => {
    const personToEdit = people[index];
    setPerson(personToEdit.person);
    setAge(personToEdit.age);
    setGender(personToEdit.gender);
    setEditIndex(index);
    setDisplayTable(true);
    setShowTable(false);
  };

  const resetForm = () => {
    setPerson("");
    setAge("");
    setGender("");
  };

  return (
    <div>
      <Hero changeDisplayTable={setDisplayTable} handleShowTable={setShowTable} />
      {displayTable && (
        <Form
          handleFormsData={handleFormChange}
          handleFormSubmit={handleSubmitData}
          username={person}
          userage={age}
          gender={gender}
          resetForm={resetForm}
        />
      )}
      {showTable && (
        <Table
          data={people}
          handleDeletePerson={deletePerson}
          changeEditPerson={handleEditPerson}
          handleDisplayTable={setDisplayTable}
          handleShowTable={setShowTable}
        />
      )}
    </div>
  );
}
