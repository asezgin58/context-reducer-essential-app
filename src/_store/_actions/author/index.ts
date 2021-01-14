import {IAction} from "../type";
import {IAuthor} from "../../../pages/Author/type";

export enum authorActions {
    SET_AUTHOR = "SET_AUTHOR"
}

export const setStoreAuthor = (payload: IAuthor): IAction => {
    return {
        type: authorActions.SET_AUTHOR,
        payload
    }
};