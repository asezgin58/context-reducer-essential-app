import {IUser} from "./type";
import {IAction} from "../../_actions/type";
import {userActions} from "../../_actions/user";

const userReducer = (state: IUser[], action: IAction): IUser[] => {
    switch (action.type) {
        case userActions.SET_USERS:
            return action.payload;
        case userActions.DELETE_USER:
            const filterList: IUser[] = [...state];
            filterList.splice(filterList.findIndex((item: IUser) => item.id === action.payload), 1);

            return filterList;
        default:
            return state;
    }
};

export default userReducer;