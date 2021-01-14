import {IStore, initialStoreData} from "../type";
import {IAction} from "../_actions/type";
import {authorActions} from "../_actions/author";
import {userActions} from "../_actions/user";

const storeReducer = (state: IStore = initialStoreData, action: IAction): IStore => {
    switch (action.type) {
        case authorActions.SET_AUTHOR:
            return {
                ...state,
                author: action.payload,
            };
        case userActions.SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};

export default storeReducer;