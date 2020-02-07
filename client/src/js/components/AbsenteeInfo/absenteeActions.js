export function toggleEditWindow(isOpen) {
    return dispatch => {
      dispatch({
        type: "TOGGLE_WINDOW",
        payload: isOpen
      });
    };
  }

export function getId(id) {
    return {
            type: "GET_CURRENT_ID",
            payload: id,
        }
    };

export function getDate(date) {
    return {
        type: "GET_CURRENT_DATE",
        payload: date,
    }
}
