import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {Task} from "../model/Task";

export interface IAppState {
    tasks: Task[];
}

const INITIAL_STATE: IAppState = {
    tasks: []
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };