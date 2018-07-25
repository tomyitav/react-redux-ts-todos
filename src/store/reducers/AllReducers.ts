import {combineReducers} from "redux";
import tasksReducer from "./tasks-reducer";
import nameReducer from "./name-reducer";

const allReducers = combineReducers({
    tasks: tasksReducer,
    name: nameReducer
});

export default allReducers;