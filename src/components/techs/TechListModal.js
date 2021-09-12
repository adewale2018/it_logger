import React, { useState, useEffect } from "react";

import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getTechs();

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
              {!loading &&
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
