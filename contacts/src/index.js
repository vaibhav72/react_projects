import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import Contacts from "./components/contacts";
import Search from "./components/search";

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
 const updatedContacts = () => {
    return contacts.filter((e) => {
      return (
        e.name.toLowerCase().includes(searchTerm) ||
        e.email.toLowerCase().includes(searchTerm)
      );
    });
  };
  const [contacts, setContacts] = useState([
    {
      name: "Vaibhav",
      email: "vaibhav@gmail.com",
    },
    {
      name: "TOny",
      email: "tony@gmail.com",
    },
    {
      name: "Peter",
      email: "peter@gmail.com",
    },
  ]);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setContacts([...contacts, { name: name, email: email }]);
    setEmail("");
    setName("");
  };

  const handleDelete = (text) => {
    setContacts(
      contacts.filter((e) => {
        return text !== e.email;
      })
    );
    console.log(contacts);
  };
  const handleEdit = (text) => {
    const newState = [...contacts];
    const index = contacts.findIndex((e) => e.email === text);

    newState[index] = { name: name, email: email };
    console.log(newState);
    setContacts(newState);
    setName("");
    setEmail("");
  };
  return (
    <div className="container">
      <form>
        <div className="form-control">
          <div className="col">
            <input
              value={name}
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="col">
            <input
              value={email}
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={handleEmailChange}
            ></input>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      <Search setSearchTerm={setSearchTerm} />
      <Contacts
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        contacts={updatedContacts()}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
