import React from "react";
import { useDispatch } from "react-redux";
import { deleteTech } from "../../redux/actions/techs";

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();
  return (
    <li className="collection-item">
      <div>
        <span className="black-text">{tech.firstName}</span>{" "}
        <span className="black-text">{tech.lastName}</span>{" "}
        <a
          href="#!"
          className="secondary-content"
          onClick={() => dispatch(deleteTech(tech.id))}
          disabled={true}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
