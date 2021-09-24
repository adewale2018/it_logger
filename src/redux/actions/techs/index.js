import TechTypes from "./TechTypes";

export const setLoading = () => ({
  type: TechTypes.SET_LOADING,
});

export const setTechs = (tech) => ({
  type: TechTypes.GET_TECHS,
  payload: tech,
});

export const setAddTech = (tech) => ({
  type: TechTypes.ADD_TECH,
  payload: tech,
});

export const setDeleteTech = (id) => ({
  type: TechTypes.DELETE_TECH,
  payload: id,
});

export const setTechError = (error) => ({
  type: TechTypes.TECHS_ERROR,
  payload: error,
});

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch(setTechs(data));
  } catch (error) {
    dispatch(setTechError(error.response.statusText));
  }
};

export const addTech = (newTech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTech),
    });
    const data = await res.json();
    dispatch(setAddTech(data));
  } catch (error) {
    dispatch(setTechError(error.response.statusText));
  }
};

// Delete Tech on server
export const deleteTech = (techId) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${techId}`, {
      method: "DELETE",
    });
    dispatch(setDeleteTech(techId));
  } catch (error) {
    dispatch(setTechError(error.response.statusText));
  }
};
