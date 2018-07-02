import {Task} from "../../model/Task";
import { ADD_TASK } from "../actions/task-actions";

const tasksReducer = (state: Task[] = [], action: any) => {
    switch (action.type) {
        case ADD_TASK:
            const newState: Task[] = [
                ...state,
                action.payload.task
            ];
            return newState;
        default:
            return state;
    }
}

export default tasksReducer;