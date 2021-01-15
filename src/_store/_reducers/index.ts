import combineReducers from 'react-combine-reducers';
import authorReducer from './author';
import userReducer from './user';
import {IAuthor as Author, initialAuthorData} from "./author/type";
import {initialUsersData, IUser as User} from "./user/type";
import {storeVarNames} from "../type";

const [storeReducer, defaultStoreData] = combineReducers({
    [storeVarNames.author]: [authorReducer, initialAuthorData],
    [storeVarNames.users]: [userReducer, initialUsersData],
});

export {
    storeReducer,
    defaultStoreData
}

export type IAuthor = Author;
export type IUser = User;