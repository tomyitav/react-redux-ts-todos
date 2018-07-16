import {Task} from "../../model/Task";

export const ADD_TASK = 'tasks:addTask';
export const DELETE_TASK = 'tasks:deleteTask';

export function addTask(newTask: Task) {
    return {
        type: ADD_TASK,
        payload: {
            task: newTask
        }
    }
}

export function deleteTask(id: number) {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    }
}