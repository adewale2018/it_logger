import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTechsData } from "../../redux/selectors/techs";
import { getTechs } from "../../redux/actions/techs";

import TechItem from "./TechItem";

const TechListModal = () => {
  const dispatch = useDispatch();
  const techs = useSelector(getTechsData);

  useEffect(() => {
    dispatch(getTechs());
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        {techs.length === 0 ? (
          <div>
            <h4>No technician yet, go ahead and add technicians</h4>
          </div>
        ) : (
          <>
            <h4>Technician List</h4>
            <ul className="collection">
              {techs &&
                techs.map((tech) => (
                  <TechItem
                    className="collection-item"
                    tech={tech}
                    key={tech.id}
                  />
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TechListModal;
