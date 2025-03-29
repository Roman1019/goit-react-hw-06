import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onFilter }) {
  const idFind = useId();
  return (
    <div className={css.searchDiv}>
      <label className={css.label} htmlFor={idFind}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        id={idFind}
      />
    </div>
  );
}
