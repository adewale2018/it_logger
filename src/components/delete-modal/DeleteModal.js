import React from "react";
import { useDispatch } from "react-redux";

import { removeLog } from "../../redux/actions/logs";
import M from "materialize-css/dist/js/materialize.min.js";

const DeleteLogModal = (props) => {
  console.log('PROPS', props);
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log('PROPS', props);
    M.toast({ html: "You have successfully remove the log", classes: "green" });
  };

  return (
    <div id="delete-log-modal" className="modal">
      <div className="modal-content">
        <div className="row">
          <h5>Are you sure you want to REMOVE this log?</h5>
        </div>
      </div>
      <div className="modal-footer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="#!"
            onClick={handleDelete}
            className="modal-close waves-effect red waves-light btn"
          >
            YES
          </a>
          <a
            href="#!"
            className="modal-close waves-effect green waves-light btn"
            style={{ marginLeft: "20px" }}
          >
            NO
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeleteLogModal;
