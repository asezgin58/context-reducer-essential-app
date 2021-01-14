import {IAction} from "../type";
import {IUser} from "../../../pages/User/type";

export enum userActions {
    SET_USERS = "SET_USERS"
}

export const setStoreUsers = (payload: IUser[]): IAction => {
    return {
        type: userActions.SET_USERS,
        payload
    }
};