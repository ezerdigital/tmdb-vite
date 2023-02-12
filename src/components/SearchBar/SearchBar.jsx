import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder={"Search a TV show you may like"}
      />
    </>
  );
};

export default SearchBar;