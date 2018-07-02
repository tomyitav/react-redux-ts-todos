import {combineReducers} from "redux";
import tasksReducer from "./tasks-reducer";

const allReducers = combineReducers({
    tasks: tasksReducer
});

export default allReducers;