export function toggleEditWindow(isOpen) {
    return dispatch => {
      dispatch({
        type: "TOGGLE_WINDOW",
        payload: isOpen
      });
    };
  }