import LogTypes from "../../actions/logs/LogTypes";

const initialState = {
  logs: [],
  current: null,
  loading: false,
  error: null,
};
const LogReducers = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LogTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LogTypes.GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    case LogTypes.ADD_LOG:
      return {
        ...state,
        logs: [payload, ...state.logs],
        loading: false,
      };
    case LogTypes.LOGS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default LogReducers;
