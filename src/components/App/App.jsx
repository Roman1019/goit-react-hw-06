import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("saved-contact");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  console.log(contacts);

  const addContact = (newContact) => {
    setContacts((prewContact) => {
      return [...prewContact, newContact];
    });
  };

  const deletContact = (contactId) => {
    setContacts((prewContact) => {
      return prewContact.filter((contact) => contact.id !== contactId);
    });
  };

  const [filter, setFilter] = useState("");
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="section">
      <h1 className={css.head}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={deletContact} />
    </div>
  );
}
