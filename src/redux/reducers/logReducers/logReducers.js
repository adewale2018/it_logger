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
    case LogTypes.UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => (log.id === payload.id ? payload : log)),
      };
    case LogTypes.ADD_LOG:
      return {
        ...state,
        logs: [payload, ...state.logs],
        loading: false,
      };
    case LogTypes.DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== payload),
        loading: false,
      };
    case LogTypes.LOGS_ERROR:
      return {
        ...state,
        error: payload,
      };
    case LogTypes.SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case LogTypes.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case LogTypes.SEARCH_LOGS:
      return {
        ...state,
        logs: payload,
      };
    default:
      return state;
  }
};

export default LogReducers;
