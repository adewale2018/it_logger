import React from "react";
import { useDispatch } from "react-redux";
import { deleteTech } from "../../redux/actions/techs";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech: { id, firstName, lastName} }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteTech(id))
    M.toast({ html: `Technician ${firstName} has been successfully deleted`, classes: "red" });
  }
  return (
    <li className="collection-item">
      <div>
        <span className="black-text">{firstName}</span>{" "}
        <span className="black-text">{lastName}</span>{" "}
        <a
          href="#!"
          className="secondary-content"
        onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
