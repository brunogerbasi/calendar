const calendar_Initial = {
    "Calendar": []
};

function calendarReducer (state = calendar_Initial, action) {

    switch (action.type) {
        case 'CALENDAR_STATE':
            return {
                ...state,
                Calendar: action.payload.Calendar
            }

        default:
            return state
    }
}

export default calendarReducer