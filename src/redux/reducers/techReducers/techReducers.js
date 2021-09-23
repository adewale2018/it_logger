import TechTypes from "../../actions/techs/TechTypes";

const INITIAL_STATE = {
  techs: [],
  loading: false,
  error: null,
};

const techReducers = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case TechTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TechTypes.GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false,
      };
    case TechTypes.ADD_TECH:
      return {
        ...state,
        techs: [payload, ...state.techs],
        loading: false,
      };
    case TechTypes.DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== payload),
        loading: false,
      };
    case TechTypes.TECHS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default techReducers;
