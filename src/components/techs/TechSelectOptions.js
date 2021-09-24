import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTechsData, getTechLoading } from "../../redux/selectors/techs";
import { getTechs } from "../../redux/actions/techs";
import Preloader from "../layout/Preloader";

const TechSelectOptions = () => {
  const dispatch = useDispatch();
  const techs = useSelector(getTechsData);
  const loading = useSelector(getTechLoading);
  useEffect(() => {
    dispatch(getTechs());
    
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Preloader />;
  }
  return (
    !loading &&
    techs.length !== 0 &&
    techs.map((t) => (
      <option value={`${t.firstName} ${t.lastName}`} key={t.id}>
        {`${t.firstName} ${t.lastName}`}
      </option>
    ))
  );
};

export default TechSelectOptions;
