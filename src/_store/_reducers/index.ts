import combineReducers from 'react-combine-reducers';
import authorReducer from './author';
import userReducer from './user';
import {IAuthor as Author, initialAuthorData} from "./author/type";
import {initialUsersData, IUser as User} from "./user/type";
import {IStoreReducer as StoreReducer} from "./type";

const [storeReducer, defaultStoreData] = combineReducers<StoreReducer>({
    author: [authorReducer, initialAuthorData],
    users: [userReducer, initialUsersData],
});

export {
    storeReducer,
    defaultStoreData
}

export type IAuthor = Author;
export type IUser = User;
export type IStoreReducer = StoreReducer;