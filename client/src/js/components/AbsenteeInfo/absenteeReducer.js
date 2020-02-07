const defaultState = {
    toggleWindow: false,
    currentId: '',
    currentDate: '',
  };
  
export default function absenteeInfo (state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
      case "TOGGLE_WINDOW": {
        return {
          ...state,
          toggleWindow: payload
        }
      }
      case "GET_CURRENT_ID": {
          return {
              ...state,
              currentId: payload
          }
      }
      case "GET_CURRENT_DATE": {
          return {
              ...state,
              currentDate: payload
          }
      }
      default: {
        return state;
      }
    }
}