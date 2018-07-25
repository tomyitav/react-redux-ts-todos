import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {Task} from "../model/Task";
import {Name} from "../model/Name";

export interface IAppState {
    tasks: Task[],
    name: Name
}

const INITIAL_STATE: IAppState = {
    tasks: [],
    name: {name: ""}
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };