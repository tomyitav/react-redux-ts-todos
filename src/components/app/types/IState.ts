import {Task} from "../../../model/Task";

export interface IState {
    currentTask: string;
    tasks: Task[];
}