import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchLogs } from "../../redux/actions/logs";

const SearchBar = () => {
  const dispatch = useDispatch();
  // const [text, setText] = useState("");
  const text = useRef('')

  const handleChange = () => {
    dispatch(searchLogs(text.current.value));
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(searchLogs(text));
  // };
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              required
              // value={text}
              // onChange={(e) => setText(e.target.value)}
              ref={text}
              onChange={handleChange}
              placeholder='Search Logs...'
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
