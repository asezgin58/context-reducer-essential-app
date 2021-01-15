import {IAction} from "../type";
import {IUser} from "../../_reducers";

export enum userActions {
    SET_USERS = "SET_USERS",
    DELETE_USER = "DELETE_USER"
}

export const setStoreUsers = (payload: IUser[]): IAction => {
    return {
        type: userActions.SET_USERS,
        payload
    }
};

export const deleteStoreUser = (payload: number): IAction => {
    return {
        type: userActions.DELETE_USER,
        payload
    }
};