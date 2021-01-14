import {IStore, initialStoreData} from "../type";
import {IAction} from "../_actions/type";
import {authorActions} from "../_actions/author";
import {userActions} from "../_actions/user";
import {IUser} from "../../pages/User/type";

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
        case userActions.DELETE_USER:
            const filterList: IUser[] = [...state.users];
            filterList.splice(filterList.findIndex((item: IUser) => item.id === action.payload), 1);

            return {
                ...state,
                users: filterList,
            };
        default:
            return state;
    }
};

export default storeReducer;