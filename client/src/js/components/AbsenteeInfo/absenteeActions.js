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

export function getNotes(notes) {
    return {
        type: "GET_NOTES",
        payload: notes,
    }
}

export function toggleExcused(excused) {
    return {
        type: "GET_EXCUSED",
        payload: excused,
    }
}

export function updateAbsence(id, notes, excused, authToken, slack_id, date) {
        fetch(`/api/absences?access_token=${authToken}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                slack_id: slack_id,
                date: date,
                excused: excused,
                notes: notes,
                id: id
            })
          })
}
