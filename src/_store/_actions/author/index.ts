import {IAction} from "../type";
import {IAuthor} from "../../_reducers";

export enum authorActions {
    SET_AUTHOR = "SET_AUTHOR"
}

export const setStoreAuthor = (payload: IAuthor): IAction => {
    return {
        type: authorActions.SET_AUTHOR,
        payload
    }
};