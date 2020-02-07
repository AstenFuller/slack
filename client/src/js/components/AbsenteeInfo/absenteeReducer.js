const defaultState = {
    toggleWindow: false
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
      default: {
        return state;
      }
    }
}