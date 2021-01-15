import combineReducers from 'react-combine-reducers';
import authorReducer from './author';
import userReducer from './user';
import {IAuthor as Author, initialAuthorData} from "./author/type";
import {initialUsersData, IUser as User} from "./user/type";
import {storeVarNames} from "../type";
import {IStoreReducer as StoreReducer} from "./type";

const [storeReducer, defaultStoreData] = combineReducers<StoreReducer>({
    [storeVarNames.author]: [authorReducer, initialAuthorData],
    [storeVarNames.users]: [userReducer, initialUsersData],
});

export {
    storeReducer,
    defaultStoreData
}

export type IAuthor = Author;
export type IUser = User;
export type IStoreReducer = StoreReducer;