import {Name} from "../../model/Name";

export const SET_NAME = 'name:set';

export function setName(name: Name) {
    return {
        type: SET_NAME,
        payload: {
            name
        }
    }
}