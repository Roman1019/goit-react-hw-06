import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <div>
        <div className={css.contactHeadDiv}>
          <div className={css.contactHeadIconDiv}>
            <FaUser />
          </div>

          <h3 className={css.contactHead}>{contacts.name}</h3>
        </div>
        <div className={css.contactParDiv}>
          <div className={css.contactHeadIconDiv}>
            <FaPhoneAlt />
          </div>
          <p className={css.contactPar}>{contacts.number}</p>
        </div>
      </div>
      <div className={css.contactButtonDiv}>
        <button
          className={css.contactButton}
          onClick={() => onDelete(contacts.id)}
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
}
