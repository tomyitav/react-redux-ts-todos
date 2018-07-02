import {Task} from "../../model/Task";

export const ADD_TASK = 'tasks:addTask';

export function addTask(newTask: Task) {
    return {
        type: ADD_TASK,
        payload: {
            task: newTask
        }
    }
}