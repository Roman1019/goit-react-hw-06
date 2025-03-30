import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice.js";

export default function SearchBox() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);
  // console.log(filters);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  console.log("Фільтровані контакти:", filteredContacts);

  const idFind = useId();
  return (
    <div className={css.searchDiv}>
      <label className={css.label} htmlFor={idFind}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filters}
        onChange={handleSearch}
        id={idFind}
      />
    </div>
  );
}
