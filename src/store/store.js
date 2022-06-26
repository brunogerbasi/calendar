import { createStore, combineReducers } from "redux"

import CalendarReducers from "./Calendar/Calendar.reducers"
const rootReducer = combineReducers({   
    calendar: CalendarReducers,   
})

const store = createStore(
    rootReducer    
);

export default store
