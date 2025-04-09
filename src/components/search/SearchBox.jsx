import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.box}>
      <label htmlFor="searchInput" className={css.title}>
        Find contact by name
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.input}
      />
    </div>
  );
}
