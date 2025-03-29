import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul className={css.contactUl}>
        {contacts.map((contact) => (
          <li className={css.contactItem} key={contact.id}>
            <Contact contacts={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
